"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Swipper
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Componentes
import ProjectCard from "./ProjectCard";

// Data de projectos
const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Todolimpio MDQ",
    description: "Sistema de Gestión de Limpieza de Tapizados",
    tecnologies: " React JS - Material UI - Light & Dark Mode - Vercel",
    link: "https://todolimpio.vercel.app/",
    github: "https://github.com/RumRage/todolimpio",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Fitness App",
    description: "Página Web para entrenador Fitness. ",
    tecnologies: "React JS - Material UI - Tailwind CSS - EmailJS -     Vercel",
    link: "https://joaco-front.vercel.app/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Mi primer Portfolio",
    description: "Mi primer portfolio web.",
    tecnologies:
      "React JS - Material UI - Tailwind CSS - Framer-Motion - React Hook Form - Vercel",
    link: "https://mi-portfolio-gamma.vercel.app/",
    github: "https://github.com/RumRage/mi-portfolio",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Portfolio Actual",
    description: "Mi último projecto. Este portfolio.",
    tecnologies:
      "React JS - Next JS - Tailwind CSS - Shadcn - Light & Dark Mode - Vercel",
    link: "/",
    github: "/",
  },
];

const Projects = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Texto */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
        flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Últimos projectos</h2>
          <p className="subtitle mb-8">
            Un poco de los últimos projectos en los que estuve trabajando
          </p>
          <Link href="/projects">
            <Button>Todos los projectos</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[570px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Mostrar solo 4 */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
