import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import BookCard from "../components/BookCard";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                setSavedBooks(res.data);
            })
            .catch(err => console.log(err));
    };

    function deleteBook(book) {
        API.deleteBook(book._id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Card>
                        <h2>Saved Books:</h2>
                        {savedBooks.length ? (
                            <List>
                                <ListItem>
                                    {savedBooks.map(book => (
                                        <BookCard 
                                            key={book._id}
                                            {...book}
                                            deleteOnClick={() => deleteBook(book)}
                                            onSearchPage={false}
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

export default Saved;