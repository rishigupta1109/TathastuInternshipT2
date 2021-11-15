import "../../assets/css/contact.css";
import { useState } from 'react';
const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [message, setmessage] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if (name.trim() != "" && message.trim() != "" && number != "" && number.length === 10 && email.includes('@')) {
            alert(`Thanks ${name} , We got your message. we will contact you soon`);
            setname("");
            setemail("");
            setnumber("");
            setmessage("");
        }
        else {
            alert("please fill the details properly")
        }
    }
    const namechangeHandler = (e) => {
        setname(e.target.value);
    }
    const emailchangeHandler = (e) => {
        setemail(e.target.value);
    }
    const numberchangeHandler = (e) => {
        setnumber(e.target.value);
    }
    const messagechangeHandler = (e) => {
        setmessage(e.target.value);
    }
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={submitHandler}>
                <h4>Full Name</h4>
                <input onChange={namechangeHandler} value={name} type="text" />
                <h4>Email Address</h4>
                <input onChange={emailchangeHandler} value={email} type="email" />
                <h4>Mobile Number</h4>
                <input onChange={numberchangeHandler} value={number} type="number" />
                <h4>Message</h4>
                <textarea onChange={messagechangeHandler} value={message} name="message" id="message" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Contact;