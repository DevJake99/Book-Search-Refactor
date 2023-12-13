const { gql } = require('apollo-server');

const typeDefs = gql`
type Book{
    bookId: String!
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
}
type User{
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}
type Auth{
    token: ID!
    user: User
}

type Query{
    me: User
}

type Mutation{
    createUser(
        username:String!,
        email: String!,
        password: String!
    ) : Auth
    login(
        email: String!,
        password: String!
    ): Auth

    saveBook(
        authors: [String],
        description: String,
        title: String,
        bookId: String,
        image: String,
        link: String
    ): User

    deleteBook(bookId: string): User
    
}
`;
module.exports = typeDefs;