import "../../assets/css/home.css";
import img from "../../assets/images/coding-buddies-illustrator.jpg";
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <div className="home">
            {props.page=="home"&& <div className="leftcontainer">
                <h2>Grow Your Buisness With</h2>
                <h1 style={{ color: "#0fcff9" }}>RTechnologies</h1>
                <h2>We have the best peoples with us.</h2>
                <NavLink className="ServiceBtn" to="/Services">Services we Provide</NavLink>
            </div>}
            {props.page=="about"&& <div className="leftcontainer">
                <h2>We at</h2>
                <h1 style={{ color: "#0fcff9" }}>RTechnologies</h1>
                <h2>Provide you the best services we can provide.</h2>
                <p>We have team of experienced people
                 working day night for you.</p>
                <NavLink className="ServiceBtn" to="/Contact">Contact Us</NavLink>
            </div>}
            <div className="rightcontainer">
                <img src={img} className="floatingimg" alt="image" />
            </div>
        </div>
    )
}
export default Common;