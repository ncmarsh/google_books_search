import React from "react";

const styles = {
    listItem: {
        padding: "0px",
        backgroundColor: "#1981E6",
        border: "none"
    }
}

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
};

export function ListItem({ children }) {
    return (
        <li className="list-group-item" style={styles.listItem}>
            {children}
        </li>
    );
};