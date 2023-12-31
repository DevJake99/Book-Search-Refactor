const typeDefs = `
type Book{
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
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

type Query {
    me: User
}

type Mutation{
    createUser(
        username:String!,
        email: String!,
        password: String!
    ) : Auth

    login(
        username: String!,
        password: String!
    ): Auth

    saveBook(
        authors: [String],
        description: String!,
        title: String!,
        bookId: String!,
        image: String,
        link: String): User


    deleteBook(bookId: String): User
    
}
`;
module.exports = typeDefs;