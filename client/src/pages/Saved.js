import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import { DeleteBtn, ViewBtn } from "../components/Buttons";
import BookCard from "../components/BookCard";

function Saved() {
    const [books, setBooks] = useState([]);

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Card>
                        <h2>Saved Books</h2>
                        <List>
                            <ListItem>
                                <Card>
                                    <BookCard>
                                        <DeleteBtn>Delete</DeleteBtn>
                                        <ViewBtn>View</ViewBtn>
                                    </BookCard>
                                </Card>
                            </ListItem>
                        </List>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Saved;