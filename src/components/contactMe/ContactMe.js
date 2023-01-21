import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.scss';
import { HiOutlineMailOpen, HiOutlinePhoneIncoming } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        event.target.name==="user_name" 
        ? setName(event.target.value)
        : event.target.name==="user_email" 
        ? setEmail(event.target.value)
        : event.target.name==="message" 
        ? setMessage(event.target.value)
        : console.log("error")
      };


    //email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ojs0tby', 'template_cjuwpug', /*form.current*/e.target, 'VeoOLagOziNYBSY0o')
        .then((result) => {
            console.log(result.text);
            result.text ==="OK" ? toast.success(`Message sended`, {position: "top-center" }) : console.log("no")
            setName("")
            setMessage("")
            setEmail("")
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className='contact mx-11 md:mx-16 my-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center'>
            <div className='contactLeft md:mb-12'>
                <div className='content'>
                    <h2>DON'T BE SHY !</h2>
                    <p>
                        Feel free to get in touch with me.
                        I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>
                </div>
                <div className='adress'>
                    <div className='icon'>
                        <HiOutlineMailOpen />
                    </div>
                    <div className='inf'>
                        <h3>MAIL</h3>
                        <h4>yassirKibou06@gmail.com</h4>
                    </div>
                </div>
                <div className='adress'>
                    <div className='icon'>
                        <HiOutlinePhoneIncoming />
                    </div>
                    <div className='inf'>
                        <h3>CALL ME</h3>
                        <h4>+212675467067</h4>
                    </div>
                </div>
                <div className='socail'>
                    <a href='https://facebook.com' className='socailIcon'><FaFacebookF /></a>
                    <a href='https://instagrame.com' className='socailIcon'><FaInstagram /></a>
                </div>
            </div>
            <div className='contactRight mb-28 md:mb-2'>
                <form id="myform" ref={form} onSubmit={sendEmail} action="#" autoComplete='off'>
                    <input type="text" id="fname" name="user_name" placeholder='YOUR NAME' onChange={(e) => handleChange(e)} value={name} />
                    <input type="email" id="femail" name="user_email" placeholder='YOUR EMAIL' required onChange={(e) => handleChange(e)} value={email} />
                    <textarea id="review" name="message"  placeholder='YOUR MESSAGE' required  onChange={(e) => handleChange(e)} value={message}></textarea>
                    <input className='submit' type="submit" value="SEND MESSAGE" />
                </form>
            </div>
        </div>
    )
}

export default Contact;