"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

//EmailsJS
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Iconos
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  //EmailJS
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_nx1kpdt",
        "template_q0fqj8r",
        form.current,
        "Ih1LKRlkhkP4-aRH0"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensaje enviado correctamente");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error enviando el mensaje");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      noValidate=""
      className="flex flex-col gap-y-4"
    >
      {/* Input Nombre */}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          onFocus={(e) => (e.target.placeholder = "Escribe tu nombre")}
          onBlur={(e) => (e.target.placeholder = "Nombre")}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onFocus={(e) => (e.target.placeholder = "Escribe tu Email")}
          onBlur={(e) => (e.target.placeholder = "Email")}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Textarea */}
      <div className="relative flex items-center">
        <Textarea
          type="text"
          id="message"
          name="message"
          placeholder="Mensaje"
          required
          onFocus={(e) => (e.target.placeholder = "Escribe aquí tu mensaje")}
          onBlur={(e) => (e.target.placeholder = "Mensaje")}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Hablemos"}
        <ArrowRightIcon size={20} />
        <ToastContainer />
      </Button>
    </form>
  );
};

export default Form;
