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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      // 1️⃣ Send email to YOU
      await emailjs.send(
        "6234",
        "template_4l2io7g",
        formData,
        "lYyowL4D5JgGRp9fA"
      );

      // 2️⃣ Auto-reply to USER
      await emailjs.send(
        "6234",
        "template_dh1t6wa",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "lYyowL4D5JgGRp9fA"
      );

      setSubmitted(true);

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      // optional: reset success message after few seconds
      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div
      className="flex justify-start w-[100%] sm:w-[65%] flex-col ml-0 sm:ml-4 mr-4 rounded p-3 border shadow-lg shadow-[#86a987]"
      style={{
        backgroundImage: "url('./images/contactimg.png')",
      }}
    >
      <h2 className="sm:hidden text-[#4c7753] font-semibold text-xl">
        Contact me
      </h2>

      <form onSubmit={handleSubmit} className="mx-auto max-w-xl">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input sm:col-span-2"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input sm:col-span-2"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="input sm:col-span-2"
            required
          />

        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className="font-semibold w-full text-black py-2 rounded hover:bg-[#4c7753] bg-gradient-to-r from-[#bbdac0] border shadow-sm"
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