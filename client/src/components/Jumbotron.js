import React from "react";

const styles = {
    jumbotron: {
        marginTop: "20px",
        marginLeft: "30px",
        marginRight: "30px",
        backgroundColor: "grey",
        textAlign: "center"
    }
}

function Jumbotron() {
    return (
        <div className="jumbotron" style={styles.jumbotron}>
            <h1 className="display-4">(React) Google Books Search</h1>
            <hr className="my-4" />
            <p>Search for and Save Books of Interest</p>
        </div>
    )
}

export default Jumbotron;