import React from "react";
import Crud from "./Crud";

export function Notes() {
    return (
        <div className="notes-container">
            <h1>Notes</h1>
            <div className="new-note">
                <Crud />
            </div>
        </div>
    )
}

