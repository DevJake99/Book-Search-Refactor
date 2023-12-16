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

export const LOGIN = gql`
mutation login($email:String!, $password: String!){
    loginUser(email: $email, password: $password){
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

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String, $link: String){
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
        _id
        username
        email
        bookCount
        savedBooks{
            boookId
            authors
            description
            title
            image
            link
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation deleteBook($bookId: String!){
    removeBook(bookId: $bookId){
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