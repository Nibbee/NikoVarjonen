import React from "react";
import '../css/contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id="contact">
            <h2>CONTACT ME</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <artice className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>varjoneniko@gmail.com</h5>
                        <a href="mailto:varjoneniko@gmail.com">Send me an Email</a>
                    </artice>
                    <artice className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+Phonenumber</h5>
                        <a href="https://api.whatsapp.com/send?phone=+358405348026">Send me a Message</a>
                    </artice>
                    <artice className="contact_option">
                        <AiOutlineLinkedin className="contact_option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>Niko Varjonen</h5>
                        <a href="">Message in LinkedIn</a>
                    </artice>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;