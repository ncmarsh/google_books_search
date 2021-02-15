import React from "react";

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
    }
}

function BookCard(props) {
    return (
        <div className="card" style={styles.bookCard}>
            <h3>
                <a href={props.link}>
                    {props.title}
                </a> 
            </h3>
            <h4>{props.subtitle}</h4>
            <h5>Written by: {props.author}</h5>
            <hr />
            <div style={styles.text}>
                <img src={props.image} alt="Cover Image" className="img-fluid" style={styles.image} />
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default BookCard;