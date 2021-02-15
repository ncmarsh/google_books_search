import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import BookCard from "../components/BookCard";

function Search() {
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    // useEffect(() => {
        // loadBooks(),
    // }, []);

    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             console.log(res.data)
    //             // setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // };

    // Search form input
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({...formObject, [name]: value})
    };

    // Search form button
    function handleFormSubmit(e) {
        e.preventDefault();

        if (formObject.title) {
            API.googleBooksSearch(formObject.title)
            .then(res => {
                console.log(res.data.items)
                let searchResults = res.data.items.map((book) => ({
                    _id: book.id,
                    link: book.volumeInfo.infoLink,
                    title: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    author: book.volumeInfo.authors.join(", "),
                    image: book.volumeInfo.imageLinks.smallThumbnail,
                    description: book.volumeInfo.description
                }));
                setBooks(searchResults);
            })
                // setFormObject(title: "")
            .catch(err => console.log(err));
        }
    };

    function saveBook(book) {
        console.log(book);
        API.saveBook(book)
        .then(res => console.log("saved"))
        .catch(err => console.log(err));
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Card>
                        <form>
                            <h2>Book Search:</h2>
                            <Input 
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Book Title"
                            />
                            <FormBtn
                                onClick={handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Card>
                    <Card>
                        <h2>Results:</h2>
                        {books.length ? (
                            <List>
                                <ListItem>
                                    {books.map(book => (
                                        <BookCard 
                                            key={book._id} 
                                            {...book} 
                                            onClick={() => saveBook(book)}
                                        >
                                        </BookCard>
                                    ))}
                                </ListItem>
                            </List>
                        ) : (
                            <h3>No Results Found</h3>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;