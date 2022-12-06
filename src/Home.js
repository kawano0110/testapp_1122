import logo from './logo.svg';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
    } from "react-router-dom";


function Home() {
    return (
        <>
            <h2>Home</h2>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Slider></Slider>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <footer>
                <p>Copyright © Inc. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Home;