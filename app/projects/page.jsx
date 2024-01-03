"use client";

import React, { useState } from "react";

//Componentes
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "escritorio",
    name: "Todolimpio MDQ",
    description: "Sistema de Gestión de Limpieza de Tapizados",
    tecnologies: " React JS - Material UI - Light & Dark Mode - Vercel",
    link: "https://todolimpio.vercel.app/",
    github: "https://github.com/RumRage/todolimpio",
  },
  {
    image: "/work/1.png",
    category: "escritorio",
    name: "Fitness App",
    description: "Página Web para entrenador Fitness. ",
    tecnologies: "React JS - Material UI - Tailwind CSS - EmailJS -     Vercel",
    link: "https://joaco-front.vercel.app/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "escritorio",
    name: "Mi primer Portfolio",
    description: "Mi primer portfolio web.",
    tecnologies:
      "React JS - Material UI - Tailwind CSS - Framer-Motion - React Hook Form - Vercel",
    link: "https://mi-portfolio-gamma.vercel.app/",
    github: "https://github.com/RumRage/mi-portfolio",
  },
  {
    image: "/work/4.png",
    category: "escritorio y movil",
    name: "Portfolio Actual",
    description: "Mi último projecto. Este portfolio.",
    tecnologies:
      "React JS - Next JS - Tailwind CSS - Shadcn - Light & Dark Mode - Vercel",
    link: "/",
    github: "/",
  },
];

//Categorias
const uniqueCategories = [
  "todos mis projectos",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("todos mis projectos");

  //Filtro proyectos
  const filteredProjects = projectData.filter((project) => {
    return category === "todos mis projectos"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis projectos
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[600px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[172px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Contenido Tabs */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
