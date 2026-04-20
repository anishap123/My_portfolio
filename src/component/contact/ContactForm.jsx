import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      setIsButtonDisabled(true); // Disable the button while submitting
      await axios.post("http://127.0.0.1:8000/contact/", formData).then(() => {
        console.log("success");
        setSubmitted(true);
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="flex justify-start w-[100%] sm:w-[65%] flex-col ml-0 sm:ml-4 mr-4 bg-slate-100  sm:bg-slate-200  rounded p-3">
      <h2 className="sm:hidden  text-[#54595F] font-semibold text-xl sm:text-2xl flex justify-start">Contact me</h2>
        <form
          action="#"
          method="POST"
          className="mx-auto  max-w-xl  "
          onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4c7753] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4c7753] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4c7753] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
       
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="organization"
                  onChange={(e) => setSubject(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4c7753] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4c7753] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 mb-2">
            <button
              type="submit"
              className={`block w-full rounded-md bg-slate-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4c7753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4c7753] ${
                submitted ? "cursor-default" : ""
              }`}
              disabled={isButtonDisabled}
            >
              {submitted ? "Thank you! Your message is sent successfully" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;






