import { Link } from "react-router-dom"

function Homepage() {
    return (
        <div className="yesBox">

            <Link to="/yes" >
            <span className="yesBut">
                😎                                  YES, WE SHALL!
            </span>
        </Link>
        </div >
    )
}

export default Homepage