import React, { useState } from 'react';
import Divider from './Divider';

const Contact = ({ headingStyle }) => {
    const [buttonText, setButtonText] = useState('Send');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const sendMail = e => {
        e.preventDefault();
        console.log(formData);
        const { email, message, name } = formData;
        if (!email || !message || !name) {
            return;
        }

        setButtonText('Thank You!');

        // Send E-Mail Here

        setTimeout(() => {
            setButtonText('Send');
        }, 2000);
    };

    return (
        <form
            action="
            "
        >
            <h3 className={`font-semibold mb-2 text-2xl ${headingStyle}`}>
                Contact Us
            </h3>
            <input
                name="name"
                type="text"
                className="w-full my-2 py-3 px-2 rounded"
                placeholder="Your name..."
                onChange={e =>
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                    })
                }
            />
            <input
                name="email"
                type="text"
                className="w-full my-2 py-3 px-2 rounded"
                placeholder="Your e-mail..."
                onChange={e =>
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                    })
                }
            />
            <textarea
                name="message"
                placeholder="Your message..."
                onChange={e =>
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                    })
                }
                className="w-full my-2 py-3 px-2 rounded h-40"
            ></textarea>
            <button
                onClick={sendMail}
                type="submit"
                className="mt-4 bg-primary rounded-lg shadow-md mx-auto px-8 py-2 text-white outline-none"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default Contact;
