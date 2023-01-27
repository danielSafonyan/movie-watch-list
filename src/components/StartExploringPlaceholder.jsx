import React from 'react'
import { Link } from "react-router-dom";

export default function StartExploringPlaceholder(props) {
    return (
        <div className="start-exploring">
            <div className="start-exploring-text">
                <Link to={'/'}>
                    <i className="fa-solid fa-film"></i> <br/> {props.message}
                </Link>
            </div>
        </div>
        )
}

