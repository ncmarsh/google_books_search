import React from "react";

const styles = {
    button: {
        float: "right",
        marginRight: "5px"    }
}

export function BookButton(props) {
    return (
        <button {...props} style={styles.button}>
            {props.children}
        </button>
    )
};