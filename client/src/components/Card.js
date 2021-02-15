import React from "react";

const styles = {
    card: {
        height: "auto",
        padding: "30px",
        backgroundColor: "#1981E6",
        marginBottom: "20px"
    }
}

function Card(props) {
    return (
        <div {...props} className="card" style={styles.card}>
            {props.children}
        </div>
    )
}

export default Card;