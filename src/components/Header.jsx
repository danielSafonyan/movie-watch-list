import React from 'react'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <h2>{props.curLocation}</h2>
            <Link to={props.path}>{props.destination}</Link>
        </header>
        )
}

