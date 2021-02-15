import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import BookCard from "../components/BookCard";

function Saved() {
    const [books, setBooks] = useState([]);

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Card>
                        <h2>Saved Books:</h2>
                        {books.length ? (
                            <List>
                                <ListItem>
                                    {books.map(book => (
                                        <BookCard 
                                            key={book.id} 
                                            link={book.volumeInfo.previewLink}
                                            title={book.volumeInfo.title}
                                            subtitle={book.volumeInfo.subtitle}
                                            author={book.volumeInfo.authors.join(", ")}
                                            image={book.volumeInfo.imageLinks.smallThumbnail}
                                            description={book.volumeInfo.description}
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