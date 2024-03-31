// HomeSection.js
import "./HomeSection.css"

const HomeSection = () => (
    <div className="home-section">
        <div>
            <h1 className="logo">BookUsNow</h1>
            <p>Mumbai, India ?</p>
        </div>
        <div className="search-container">

            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
            <div className="item-list">

                <ul className="list">
                    <li>Live shows</li>
                    <li>Streams </li>
                    <li>Movies </li>
                    <li>Plays</li>
                    <li>Events</li>
                    <li>Sports</li>
                    <li>Activities</li>
                    
                </ul>
            </div>
        </div>
        <div>
            <h1>Favorites</h1>
            <button className="login-button">Login</button>

            <img src="login-image.png" alt="Login" className="login-image" />


        </div>


    </div>

)

export default HomeSection;
