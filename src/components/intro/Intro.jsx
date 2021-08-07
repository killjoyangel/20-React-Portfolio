import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/img/profile.jpg" alt="profileimage" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h1> Welcome to Killjoy Designs</h1>
                    <h2>My Name is Ariel Marchand I currently live in Grand Junction, Colorado with my partner and
                        cat. I have an Associate of Arts degree with an emphasis on early childhood education from
                        Colorado
                        Mountain College. I am currently enrolled in the Denver University coding boot camp for web
                        development. I can't wait to be a full time web developer in the near future. And turn my
                        dream of being a digital
                        nomad into a reality. In my freetime, I enjoy reading, writing urban fiction in a collaborative
                        setting and dabbling in graphic design. </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>"If you limit your choices only to what seems possible or reasonable, you disconnect yourself
                        from what you truly want, and all that is left is compromise."
                        - Robert Fritz</h3>

                        <div className="portLink"><a href="#portfolio">Check out my portfolio</a></div>

                </div>
            </div>
        </div>
    )
}
