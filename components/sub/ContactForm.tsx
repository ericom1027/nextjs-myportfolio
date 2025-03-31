"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fullname, email, message }),
    });

    const { msg, success } = await res.json();
    setError(msg);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="border border-white p-5 rounded-lg">
      <h3>Get in Touch!</h3>
      <form
        onSubmit={handleSubmit}
        className="py-4 z-10 mt-4 border-t flex flex-col gap-5 relative"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="button-primary p-3 text-white font-bold"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
