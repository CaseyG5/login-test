import React from 'react';
import '../App.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div><a href="../../public/index.html" className="my-link">Home</a></div>
                    <div><a href="../../public/index.html" className="my-link">Log In</a></div>
                    <div><a href="../../public/index.html" className="my-link">How to Play</a></div>
                </nav>
            </header>
        );
    }
}