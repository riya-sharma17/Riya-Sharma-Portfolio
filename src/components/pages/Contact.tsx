"use client";
import React from "react";
import HeadingButton from "../ui/HeadingButton";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      alert("Message sent successfully! Thank you for reaching out.");
      e.currentTarget.reset();
    } catch (error: any) {
      console.error("EmailJS FULL ERROR:", error);
      alert(error?.text);
    }
  };

  const inputClass =
    "border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none p-3 w-full text-[#8B8B8B] font-semibold transition hover:border-b-blue-500 hover:border-l-blue-500 focus:border-b-blue-500 focus:border-l-blue-500";

  return (
    <section
      id="contact"
      className="bg-gray-background w-full flex flex-col justify-center items-center gap-10 px-6 sm:px-10 md:px-[20vw] lg:px-[25vw] py-20"
    >
      <HeadingButton text="contact" />

      <p className="description text-black text-center max-w-xl">
        Want to collaborate or have a question?
        Send me a message and I’ll get back to you.
      </p>

      <Image src="/separator.svg" alt="separator" width={100} height={100} />

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-8 items-center"
      >
        <input name="name" type="text" required placeholder="Your name*" className={inputClass} />
        <input name="email" type="email" required placeholder="Your email*" className={inputClass} />
        <input name="subject" type="text" placeholder="Subject" className={inputClass} />
        <textarea name="message" rows={4} required placeholder="Your message*" className={inputClass} />

        <button
          type="submit"
          className="font-montserrat uppercase border-l-2 border-r-2 px-6 py-2 font-semibold hover:text-blue-500 transition text-black"
        >
          Submit 📮
        </button>
      </form>
    </section>
  );
};

export default Contact;
