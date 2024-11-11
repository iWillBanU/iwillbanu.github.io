import {Link, Outlet, useLocation} from "react-router-dom";
import avatar from "../img/avatar.png";

export default function Root() {
    const location = useLocation();
    return (
        <>
            <div id="banner" />
            <div id="info-container">
                <img src={avatar} alt="Avatar" id="avatar" />
                <div>
                    <h1>iWillBanU</h1>
                    <h3><a href="https://en.pronouns.page/@iWillBanU" target="_blank" rel="noreferrer">they/them <span className="material-icons">open_in_new</span></a></h3>
                    <h2>Programmer, gamer, magic player, musician.</h2>
                </div>
            </div>
            <div id="content">
                <div id="links">
                    <Link to="/" className={location.pathname === "/" ? "active" : null}>About Me</Link>
                    <Link to="/projects" className={location.pathname === "/projects" ? "active" : null}>Projects</Link>
                    <Link to="/socials" className={location.pathname === "/socials" ? "active" : null}>Socials</Link>
                </div>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <p>
                        Site created with ❤️ by iWillBanU.
                        <br/>
                        View the source code on <a href="https://github.com/iWillBanU/iwillbanu.github.io" target="_blank" rel="noreferrer">GitHub <span className="material-icons">open_in_new</span></a>
                    </p>
                    <p>
                        Banner created by <a href="https://www.instagram.com/riley__ar" target="_blank" rel="noreferrer">riley__ar <span className="material-icons">open_in_new</span></a>
                        <br />
                        Avatar created by <a href="https://alicake.carrd.co/" target="_blank" rel="noreferrer">Alicake <span className="material-icons">open_in_new</span></a>
                    </p>
                </footer>
            </div>
        </>
    )
}
