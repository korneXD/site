import React from "react";
import Swal from "sweetalert2";
import "animate.css";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b98cfcb2-2b5b-467e-8b3e-1b311465be88");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "I've received Your message!",
        text: "Thank you!",
        iconColor: "rgb(6 182 212)",
        confirmButtonText: "Okay",
        confirmButtonColor: "rgb(6 182 212)",
        color: "rgb(255 255 255)",
        background: "rgb(12 10 9)",
        icon: "success",
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col border border-cyan-500 rounded-lg mx-auto h-full w-[550px] p-2 font-poppins">
      <form
        className="flex justify-center items-center flex-col gap-2 h-full min-w-fit"
        onSubmit={onSubmit}
      >
        <p className="text-white font-bold text-xl">
          Send me a message<span className="text-cyan-500">!</span>
        </p>
        <div className="flex justify-center items-center flex-col h-full w-full gap-1">
          <label className="text-white">Your Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full h-full p-1 rounded-lg text-cyan-500 capitalize outline outline-2 outline-offset-2 outline-cyan-500 font-bold italic"
            required
          />
        </div>
        <div className="flex justify-center items-center flex-col h-full w-full gap-1">
          <label className="text-white">Your Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full h-full p-1 rounded-lg text-cyan-500 outline outline-2 outline-offset-2 outline-cyan-500 font-bold italic"
            required
          />
        </div>
        <div className="flex justify-center items-center flex-col h-full w-full gap-1">
          <label className="text-white">Your Message:</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="w-full h-full p-1 rounded-lg text-cyan-500 outline outline-2 outline-offset-2 outline-cyan-500 font-bold italic resize-none"
            required
          ></textarea>
        </div>
        <button
          className="text-black font-bold p-2 bg-cyan-500 rounded-lg hover:scale-105 transition-all delay-50"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
