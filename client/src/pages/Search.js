import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import { SaveBtn, ViewBtn } from "../components/Buttons";
import BookCard from "../components/BookCard";

function Search() {
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    // useEffect(() => {
        // loadBooks(),
        // googleBooksSearch()
    // }, []);

    // function googleBooksSearch() {
    //     API.googleBooksSearch()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

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

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(e) {
        e.preventDefault();

        if (formObject.title) {
            let query = formObject.title;
            API.googleBooksSearch(query)
            .then(res =>
                // console.log(res.data.items)
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
        }
        // if (formObject.title) {
        //     console.log(e.target.value);
        //     API.saveBook({
        //         title: formObject.title
        //     })
        //     .then(res => loadBooks())
        //     .catch(err => console.log(err));
        // }
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
                                // disabled={!formObject.title}
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
                                    <Card>
                                        {books.map(book => (
                                            <BookCard 
                                                key={book.id} 
                                                link={book.volumeInfo.previewLink}
                                                title={book.volumeInfo.title}
                                                subtitle={book.volumeInfo.subtitle}
                                                author={book.volumeInfo.authors}
                                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                                description={book.volumeInfo.description}
                                            >
                                                <SaveBtn>Save</SaveBtn>
                                                <ViewBtn>View</ViewBtn>
                                            </BookCard>
                                        ))}
                                    </Card>
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