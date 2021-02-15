import React from "react";
import { BookButton } from "./Buttons";

const styles = {
    bookCard:{
        border: "3px #000000 solid",
        marginBottom: "8px",
        padding: "10px"
    },
    image: {
        float: "left",
        width: "100px",
        height: "auto",
        marginRight: "0.5rem"
    },
    text: {
        display: "inline-block"
    },
    link: {
        color: "#ffffff",
        textDecoration: "none"
    }
}

function BookCard(props) {
    return (
        <div className="card" style={styles.bookCard}>
            <div style={styles.text}>
                <div>
                    <BookButton onClick={props.onClick}>Save</BookButton>
                    <BookButton>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                            View
                        </a>
                    </BookButton>
                </div>
                <h3>
                    {props.title}
                </h3>
                <h4>{props.subtitle}</h4>
                <h5>Written by: {props.author}</h5>
            </div>
            <hr />
            <div style={styles.text}>
                <img src={props.image} alt="Book Cover" className="img-fluid" style={styles.image} />
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default BookCard;