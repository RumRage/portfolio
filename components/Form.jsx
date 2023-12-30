"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

//Iconos
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* Input Nombre */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Nombre" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input Email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Escribe tu mensaje aquí" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Hablemos
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
