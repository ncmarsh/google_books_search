import React, { useState } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import BookCard from "../components/BookCard";

function Search() {
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({
        title: ""
    });

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
                    author: book.volumeInfo.authors?.join(", ") || "Not available",
                    image: book.volumeInfo.imageLinks?.smallThumbnail || book.volumeInfo.imageLinks?.thumbnail,
                    description: book.volumeInfo.description || "No description available."
                }));
                setBooks(searchResults);
                // setFormObject({});
            })
            .catch(err => console.log(err));
        }
    };

    function saveBook(savedBook) {
        console.log(savedBook);
        if (savedBook)
        API.saveBook(savedBook)
        .then(res => console.log("saved"))
        .catch(err => console.log(err));

        let newList = books.filter(book => book._id !== savedBook._id);
        setBooks(newList);
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Card>
                        <form>
                            <h2>Book Search:</h2>
                            <div className="form-group">
                                <input 
                                    className="form-control"
                                    onChange={handleInputChange}
                                    name="title"
                                    type="text"
                                    placeholder="Book Title"
                                    value={formObject.title}
                                />
                                <button
                                    onClick={handleFormSubmit}
                                    style={{ float: "right", marginBottom: 10 }}
                                    className="btn btn-dark"
                                >
                                    Search
                                </button>
                            </div>
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
                                            saveOnClick={() => saveBook(book)}
                                            onSearchPage={true}
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