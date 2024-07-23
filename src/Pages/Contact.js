import React, { useState } from "react";
import { contactDetails } from "../Details";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const { email: defaultEmail, phone: defaultPhone } = contactDetails;
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted:", { email, phone, message });
  // };

  return (
    <main
      className="container mx-auto max-width section"
      style={{ marginBottom: "3rem" }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact Me!
      </h1>

      <form
        className="flex flex-col items-center pt-5"
        action="https://formspree.io/f/xblrdyww"
        method="post"
      >
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                htmlFor="email"
                className="block text-xl font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="phone"
                className="block text-xl font-semibold mb-2"
              >
                Phone:
              </label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="p-2 border border-gray-300 rounded-l"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-r"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xl font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            value="send"
            className="w-40 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
