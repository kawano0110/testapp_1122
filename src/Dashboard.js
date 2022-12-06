import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


function Dashboard() {
    return (
        <>
            <h2>Dashboard</h2>
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
    );
}
export default Dashboard;