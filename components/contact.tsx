"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { error } = await sendEmail(formData);
    error ? toast.error(error) : toast.success("Email sent successfully");
  };

  const inputClassNames =
    "rounded-lg border p-4 dark:bg-white/80 dark:focus:bg-opacity-100 transition-all dark:outline-none";

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[38rem] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:noorimanr@gmail.com" className="underline">
          noorimanr@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className={`h-14 px-4 ${inputClassNames}`}
          placeholder="Your email"
        />
        <textarea
          className={`h-52 my-3 ${inputClassNames}`}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
