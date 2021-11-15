import "../../assets/css/contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <h4>Full Name</h4>
                <input type="text" />
                <h4>Email Address</h4>
                <input type="email" />
                <h4>Mobile Number</h4>
                <input type="number" />
                <h4>Message</h4>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Contact;