import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($username:String!, $password: String!){
    login(username: $username, password: $password){
        token
        user{
            _id
            username
            bookCount
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation Mutation($description: String!, $title: String!, $bookId: String!, $authors: [String], $image: String, $link: String) {
  saveBook(description: $description, title: $title, bookId: $bookId, authors: $authors, image: $image, link: $link) {
    _id
    username
    email
    bookCount
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}`;

export const REMOVE_BOOK = gql`
mutation deleteBook($bookId: String!){
    deleteBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
        }
    }
}`