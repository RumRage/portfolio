"use client";

import Link from "next/link";

// Iconos
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/claravillarruel",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/RumRage",
    name: <RiGithubFill />,
  },
  {
    path: "https://wa.link/9swhob",
    name: <RiWhatsappFill />,
  },
  {
    path: "https://www.facebook.com/rumragee/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/rum_rage/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
