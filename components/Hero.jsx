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
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Texto */}
          <div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left"
          >
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hola, mi nombre es Clara Villarruel</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Soy estudiante de Desarrollo Web. En búsqueda de una nueva
              oportunidad laboral en el mundo de la Programación.
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
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Imagen */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Años de experiencia"
            />
            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={4}
              badgeText="Projectos terminados"
            />
            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="Años de estudio"
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat
            absolute -top-1 -right-2"
            ></div>
            <MyImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/hero.png"
            />
          </div>
          {/* Icono */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-6xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
