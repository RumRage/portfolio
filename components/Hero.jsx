import Link from "next/link";

//Iconos
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//Componentes
import { Button } from "./ui/button";
import Socials from "./Socials";
import MyImg from "./MyImg";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Texto */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hola, mi nombre es Clara Villarruel</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Estudiante de programación web de manera autodidacta hace casi 3
              años. Soy una persona proactiva, organizada y responsable, con
              buenas relaciones interpersonales. Siempre tengo la mejor
              disposición para la realización de mis labores. En búsqueda de mi
              primera oportunidad laboral.
            </p>
            {/* Botones */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contactame
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  Descargar CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Redes sociales */}
            <Socials />
          </div>
          {/* Imagen */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] 
            h-[500px] bg-no-repeat absolute -top-1 -right-2"
            >
              <MyImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative 
              bg-bottom"
                imgSrc="/hero/me.png"
              />
            </div>
            {/* Icono */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
              <RiArrowDownSLine className="3xl text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;