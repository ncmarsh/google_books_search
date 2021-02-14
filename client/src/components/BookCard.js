import React from "react";

const styles = {
    image: {
        height: "50px",
        width: "50px",
        float: "left"
    }
}

function BookCard(props) {
    return (
        <div className="card">
            <h3>
                <a href={props.link}>
                    {props.title}
                </a> 
            </h3>
            <h4>{props.subtitle}</h4>
            <h5>{props.author}</h5>
            <img src={props.image} alt="Cover Image" style={styles.image} />
            <p>{props.description}</p>
        </div>
    );
};

export default BookCard;