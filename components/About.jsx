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
    <section>
      <div>
        <h2>Sobre mi</h2>
        <div>
          {/* Imagen */}
          <div>
            <MyImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] 
                    h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
