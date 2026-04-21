import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    emailjs
      .send(
        "6234",
        "template_4l2io7g",
        formData,
        "lYyowL4D5JgGRp9fA"
      )
      .then(() => {
        setSubmitted(true);
        setIsButtonDisabled(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsButtonDisabled(false);
      });
  };

  return (
    <div className="flex justify-start w-[100%] sm:w-[65%] flex-col ml-0 sm:ml-4 mr-4 rounded p-3 border shadow-lg shadow-[#86a987]  " style={{
      backgroundImage: "url('./images/contactimg.png')",
   }}>
      
      <h2 className="sm:hidden text-[#4c7753] font-semibold text-xl">
        Contact me
      </h2>

      <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="input"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input sm:col-span-2"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="input sm:col-span-2"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            onChange={handleChange}
            className="input sm:col-span-2"
            required
          />

        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className=" font-semibold w-full  text-black py-2 rounded hover:bg-[#4c7753] bg-gradient-to-r  from-[#bbdac0] border shadow-sm "
          >
            {submitted
              ? "Thank you! Message sent ✅"
              : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;