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

// Componentes
import MyImg from "./MyImg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Clara Villarruel",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "youremail@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY, USA",
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
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] 
                    h-[505px] bg-no-repeat relative"
              imgSrc="/about/about.png"
            />
          </div>
          {/* Tabs */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
