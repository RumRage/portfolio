import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//Iconos
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { FaJs, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiNextdotjs, SiTypescript, SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";

// Componentes
import MyImg from "./MyImg";

// Datos
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Clara Villarruel",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "(+54) 2233 416253",
  },
  {
    icon: <MailIcon size={20} />,
    text: "claravillarruel4@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "24 años",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Estudiante Tecnicatura Analista en Sistemas",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Mar del Plata, Buenos Aires, Argentina.",
  },
];

const skillsData = [
  {
    title: "frontend",
    data: [
      {
        icon: <FaJs size={20} />,
        name: "Javascript",
      },
      {
        icon: <FaReact size={20} />,
        name: "React JS",
      },
      {
        icon: <TbBrandTailwind size={20} />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiNextdotjs size={20} />,
        name: "Next JS",
      },

      {
        icon: <SiTypescript size={20} />,
        name: "Typescript",
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        icon: <User2 size={20} />,
        name: "Node JS",
      },
      {
        icon: <SiExpress size={20} />,
        name: "Express",
      },
      {
        icon: <FaPhp size={20} />,
        name: "PHP",
      },
      {
        icon: <FaLaravel size={20} />,
        name: "Laravel",
      },
      {
        icon: <DiMysql size={20} />,
        name: "MySQL",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
      {
        imgPath: "/about/vercel.svg",
      },
      {
        imgPath: "/about/material.svg",
      },
      {
        imgPath: "/about/postman.svg",
      },
      {
        imgPath: "/about/windows.svg",
      },
      {
        imgPath: "/about/linux.svg",
      },
      {
        imgPath: "/about/fonts.svg",
      },
    ],
  },
];

const educationData = [
  {
    title: "educacion",
    data: [
      {
        title: "Tecnicatura en Analista en Sistemas",
        school: "ISFT 151",
        years: "2024 - 2027",
      },
      {
        title: "Ciencias sociales. Especialización en Políticas Públicas",
        school: "CENS 451: Secundario",
        years: "2020 - 2023",
      },
      {
        title: "Especialización en Música: Piano",
        school: "Polivalente de Arte: Secundario",
        years: "2012 - 2016",
      },
    ],
  },
  {
    title: "cursos",
    data: [
      {
        title: "Argentina Programa: 1 y 2",
        description: "HTML - CSS - Boostrap - Javascript - Ruby ",
        years: "2022 - 2023",
      },
      {
        title: " FreeCodeCamp: Javascript Y Diseño Web Responsivo",
        description:
          "Flex, Grid, ES7. Programación de algoritmos, orientada a objetos y funcional",
        years: "2022 - 2023",
      },
      {
        title: "Jóvenes Programadores: Javascript 1, 2 y 3",
        description: "Estructuras de Javascript",
        years: "2021 - 2022",
      },
    ],
  },
];

const experienceData = [
  {
    title: "experiencia",
    data: [
      {
        title: "Front-end Developer",
        company: "Freelance",
        years: "Marzo 2023 - Presente",
      },
      {
        title: "Quality Assurance",
        company: "Prácticas en Utest",
        years: " Marzo 2023 - Julio 2023",
      },
      {
        title: "Operadora | Administrativa",
        company: "Remolques Grucar",
        years: "Abril 2022 - Julio 2022",
      },
    ],
  },
  {
    title: "anterior",
    data: [
      {
        title: "Encargada | Cajera",
        company: "Pago Fácil María Chiquita",
        years: "Enero 2022 - Marzo 2022",
      },
      {
        title: "Auditora | Administrativa",
        company: "Drugstrore y Agencia de cobros Ripsa GyG",
        years: "Diciembre 2019 - Diciembre 2020",
      },
      {
        title: "Encargada | Cajera",
        company: "Drugstrore y Agencia de cobros Ripsa GyG",
        years: "Diciembre 2017 - Diciembre 2019",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre mi
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Imagen */}
          <div className="hidden xl:flex flex-1 relative">
            <MyImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[510px] h-[462px] bg-no-repeat relative"
              imgSrc="/about/about.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[750px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Información
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="education">
                  Estudios
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">
                  Experiencia
                </TabsTrigger>
              </TabsList>
              {/* Tabs Contenido */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Desarrolladora Web Front-end</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Estudiante de Programación Web de forma autodidacta hace 3
                      años. Camino a Full-Stack! 🤞
                    </p>
                    {/* Iconos */}
                    <div className="grid xl:grid-cols-2 gap-3 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Lenguajes */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Lenguajes</div>
                      <div className="border-b border-border"></div>
                      <div>Español nativo, Inglés C-1</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Sección SKills */}
                <TabsContent value="skills">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {" "}
                      Mis skills
                    </h3>

                    {/* Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Lista de Skills */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <h4 className="capitalize font-medium">
                            {getData(skillsData, "frontend").title}
                          </h4>
                        </div>
                        {/* Front-end */}
                        <div className="flex flex-col gap-y-8">
                          {getData(skillsData, "frontend").data.map(
                            (item, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                >
                                  <div>{item.icon}</div>
                                  <div>{item.name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Lista de Skills */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <h4 className="capitalize font-medium">
                            {getData(skillsData, "backend").title}
                          </h4>
                        </div>
                        {/* Front-end */}
                        <div className="flex flex-col gap-y-8">
                          {getData(skillsData, "backend").data.map(
                            (item, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                >
                                  <div>{item.icon}</div>
                                  <div>{item.name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="mt-10">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Otras herramientas
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Lista Tools */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt="Tools"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Sección Estudios */}
                <TabsContent value="education">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {" "}
                      Mis estudios
                    </h3>
                    {/* Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Eeducación */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(educationData, "educacion").title}
                          </h4>
                        </div>
                        {/* Lista de educación */}
                        <div className="flex flex-col gap-y-8">
                          {getData(educationData, "educacion").data.map(
                            (item, index) => {
                              const { school, title, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {title}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {school}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Cursos */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(educationData, "cursos").title}
                          </h4>
                        </div>
                        {/* Lista de estudios */}
                        <div className="flex flex-col gap-y-8">
                          {getData(educationData, "cursos").data.map(
                            (item, index) => {
                              const { title, description, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {title}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {description}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experience">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {" "}
                      Mi experiencia
                    </h3>
                    {/* Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experiencia */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(experienceData, "experiencia").title}
                          </h4>
                        </div>
                        {/* Lista de experiencia */}
                        <div className="flex flex-col gap-y-8">
                          {getData(experienceData, "experiencia").data.map(
                            (item, index) => {
                              const { title, company, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {title}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {company}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Experiencia Anterior */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(experienceData, "anterior").title}
                          </h4>
                        </div>
                        {/* Lista de estudios */}
                        <div className="flex flex-col gap-y-8">
                          {getData(experienceData, "anterior").data.map(
                            (item, index) => {
                              const { title, company, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {title}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {company}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
