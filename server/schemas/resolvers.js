const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth.js');

const resolvers = {
    Query: {
        async me(parent, args, context) {
            const user = await User.findOne({
                _id: context.user._id,
            });

            if (!user) {
                throw AuthenticationError;
            }
            return user;
        }
    },

    Mutation: {
        async createUser(parent, { username, email, password }, context) {
            const user = await User.create({ username, email, password });
            if (!user) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return ({ token, user });

        },
        async login(parent, { username, password }, context) {
            const user = await User.findOne({ $or: [{ username: username }] });

            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError
            }
            const token = signToken(user);
            return ({ token, user })
        },
        async saveBook(parent, args, context) {
            try {
                //console.log('context.user', context.user);
                //console.log('args', args)
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args } },
                    { new: true, runValidators: true }
                );
                return user
            } catch (err) {
                console.log('SaveBook err:', err);
                throw AuthenticationError;
            }
        },
        async deleteBook(parent, args, context) {
            const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true },
            );
            if (!user) {
                throw AuthenticationError;
            }
            return (user);
        },
    },
};
module.exports = resolvers;
