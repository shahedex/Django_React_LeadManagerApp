import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Lead Manager</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    | This is a sample Lead Manager App with Django and React
                </span>

            </nav>
        )
    }
}

export default Header
