import Form from "@/components/Form";
import Socials from "@/components/Socials";

// Iconos
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Imagen y Texto */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* Texto */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hola 👋
            </div>
            <h1 className="h1 max-w-md mb-8"> Trabajemos juntos</h1>
            <p className="subtitle max-w-[400px]">
              No dudes en escrbirme por consultas, asesoramiento o consejos.
              Podés contactarme en el siguiente formulario o a través de mis
              redes sociales.
            </p>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>
          {/* Imagen */}
          <div
            className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark
          bg-contain bg-top bg-no-repeat"
          ></div>
        </div>
        {/* Info y Form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info texto */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Email */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>claravillarruel4@gmail.com</div>
            </div>
            {/* Dirección */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Mar del Plata, Buenos Aires, Argentina</div>
            </div>
            {/* Teléfono */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>(+54) 2233 416253 </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
