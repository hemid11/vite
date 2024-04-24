import React from 'react';

function Contact() {
    return (
        <div>
            {}
            <h2>Contact Us</h2>
            <form>
                {}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                {}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
