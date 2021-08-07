import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
               <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
               <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
               <li onClick={()=>setMenuOpen(false)}>
                    <a href="https://killjoyangel.github.io/Updated-Portfolio-Page-2/webdevelopmentresume2.pdf">Resume</a>
                </li>
               <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    );
}