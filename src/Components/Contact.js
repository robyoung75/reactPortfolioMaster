import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    //  console.log('BUTTON  WORKS')

    emailjs
      .sendForm(
        "service_zh8my5p",
        "template_r1r87tm",
        "#contactForm",
        "user_5828w7SwtIBtQIaDKUD3b"
      )
      .then(
        (result) => {
          alert("SUCCESS", result.status, result.text);
        },
        (error) => {
          alert("FAILED", error, error.text);
        }
      );
    console.log(data);
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  }

  function handleNameInput(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleEmailInput(e) {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  }

  function handleSubjectInput(e) {
    e.preventDefault();
    setSubject(e.target.value);
    console.log(subject);
  }

  function handleMessageInput(e) {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  }

  function handleKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm" >
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  placeholder="Enter your name"
                  type="text"
                  size="35"
                  id="contactName"
                  name="name"
                  onChange={handleNameInput}
                  onKeyPress={handleKeyPress}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  placeholder="Enter your email address"
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="email"
                  onChange={handleEmailInput}
                  onKeyPress={handleKeyPress}
                  
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  placeholder="Enter your subject"
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="subject"
                  onChange={handleSubjectInput}
                  onKeyPress={handleKeyPress}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  placeholder="Thank you for typing your message here!!!"
                  onChange={handleMessageInput}
                  cols="50"
                  rows="15"
                  name="message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="submit"
                  value="Send Message"
                >
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
