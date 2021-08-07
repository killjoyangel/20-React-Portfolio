import "./navbar.scss"
import { Email, LinkedIn, GitHub, Call } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <span className="logo">Killjoy Designs: By Ariel Marchand</span>
                </div>
                <div className="itemContainer">
                        <a class="mail" href="mailto:killjoydesigner@gmail.com">
                            <Email className="icon" />
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a class="github" href="https://github.com/killjoyangel" rel="noreferrer" target="_blank">
                            <GitHub className="icon" />
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a class="linkedin" href="https://www.linkedin.com/in/ariel-marchand-1975a57b/" rel="noreferrer" target="_blank">
                            <LinkedIn className="icon" />
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a class="call" href="tel:7193731507">
                            <Call className="icon" />
                        </a>
                      <span> 719.373.1507</span>
                    </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>

    )
}
