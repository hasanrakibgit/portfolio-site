import React from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_3e1mell', 'template_0b0sm7r', e.target, 'user_lWgtwIL9Wm2Jfi4DZixK9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <section className="contact my-5 py-5">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h1 className="text-contact">Contact With Me</h1>
                
            </div>
            <div className="col-md-9 mx-auto">
                <form onSubmit={sendEmail}>
                <div className="form-group mt-5 p-2">
                        <input type="text" className="form-control p-4" placeholder="Name *" name="name"/>
                    </div>
                    <div className="form-group mt-5 p-2">
                        <input type="text" className="form-control p-4" placeholder="Email Address *" name="email"/>
                    </div>
                    <div className="form-group mt-5 p-2">
                        <input type="text" className="form-control p-4" placeholder="Subject *" name="subject"/>
                    </div>
                    <div className="form-group mt-5 p-2">
                        <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Message *" name="message"></textarea>
                    </div>
                    <div className="form-group text-center mt-5">
                        <button type="submit" className="btn submit-btn pe-5 ps-5 "> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;