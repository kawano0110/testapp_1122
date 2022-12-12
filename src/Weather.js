import logo from './logo.svg';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";




function Weather() {
    return (
        <>
            <h2>weather</h2>
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
            <p>今日の天気は</p>
            <select onChange={handleChange}>
            <option value="tokyo">東京</option>
            <option value="osaka">大阪</option>
            <option value="sapporo">札幌</option>
            </select>
            <footer>
                <p>Copyright © Inc. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Weather;