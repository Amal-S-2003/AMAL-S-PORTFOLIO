import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaInstagram, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } from '../../keys';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_USER_ID,
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send message. Try again!');
        }
      );
  };

  const handleDownload = () => {
    toast.info('CV Download started...');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Contact Me</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 bg-gray-900 p-8 rounded-2xl shadow-lg">
        {/* Left Section - Socials */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Get in Touch</h3>
          <div className="flex items-center gap-3 hover:text-cyan-400">
            <FaEnvelope />
            <a href="mailto:amalshibu379@gmail.com">amalshibu379@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-400">
            <FaPhone />
            <span>+91 7902597417</span>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-400">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/amal-s-36628a312/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-400">
            <FaGithub />
            <a href="https://github.com/Amal-S-2003" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-400">
            <FaInstagram />
            <a href="https://www.instagram.com/____amal._.__/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div
            className="flex items-center gap-3 hover:text-black font-bold border-2 border-cyan-400 hover:bg-cyan-400 px-10 py-3 rounded-lg w-fit cursor-pointer"
            onClick={handleDownload}
          >
            <FaDownload />  
            <a href="./AMAL_S(RESUME).pdf" download>
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Send a Message</h3>
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              rows="5"
              name="message"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 rounded font-semibold hover:bg-cyan-400 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default ContactMe;
