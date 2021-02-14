import React from "react";

// Container
export function Container ({ fluid, children }) {
    return (
        <div className={`container${fluid ? "-fluid" : ""}`}>
            {children}
        </div>
    )
}

// Row
export function Row({ fluid, children }) {
    return (
        <div className={`row${fluid ? "-fluid" : ""}`}>
            {children}
        </div>
    )
}

// Col
export function Col({ size, children }) {
    return (
        <div className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    )
}