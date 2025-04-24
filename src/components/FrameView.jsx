import { useId } from "react";
import { motion } from "framer-motion";
import AppScreen from "@/components/AppScreen";
import clsx from "clsx";
import Image from 'next/image'
import app from "@/images/app.png";
import brick from "@/images/brick.png";
import github from "@/images/github.png";
import nfc from "@/images/nfc.png";
import react from "@/images/react.png";
import flutter from "@/images/flutter.png";
import bcards from "@/images/bcards.png";
import aws from "@/images/aws.jpg"
import chains from "@/images/chains.png"
import gun from "@/images/gun.png"
import Button from "./Button";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const maxZIndex = 2147483647;

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  zIndex: 0,
  transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});
const bodyAnimation = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
};

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  );
}

function DeviceTouchIcon(props) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Help Coach - Capstone</AppScreen.Title>
        <AppScreen.Subtitle>
          Mental health app created <span className="text-white">from scratch</span> for college students.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
          <Image 
            src={app}
            width={500}
            height={500}
            alt=""
          />
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function StocksScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Project Portfolio Website</AppScreen.Title>
        <AppScreen.Subtitle>Created with Next.js</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
            <div className='flex justify-center mt-20'>
              <Image 
                src={github}
                width={500}
                height={500}
                alt=""
              />
            </div>
          
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function SimulatorScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>My Survivor Simulator Website</AppScreen.Title>
        <AppScreen.Subtitle>Created with Next.js, built solely by me for my own enjoyment!</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className='flex justify-center'>
            </div>
            <div className='flex justify-center'>
              <Image 
                src={chains}
                width={500}
                alt=""
              />
            </div>
          
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function InternScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Business Card Sharing App</AppScreen.Title>
        <AppScreen.Subtitle>
          Developed solely by myself for use by the entire company.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            <div className='flex justify-center'>
              <Image 
                src={bcards}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function InternScreen2({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Firearm Deteciton Website</AppScreen.Title>
        <AppScreen.Subtitle>
          A two person project to redesign our client&apos;s outdated website.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            <div className='flex justify-center'>
              <Image 
                src={gun}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function FullTimeScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Student Health & Wellness App</AppScreen.Title>
        <AppScreen.Subtitle>
          A year long project started and worked on in a team of 3 developers for a renowned University, giving me experience with a variety of other tools, including AWS integration and external database connections.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
            <div className='flex justify-center'>
              <Image 
                src={aws}
                width={500}
                height={500}
                alt=""
              />
            </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

export const features = [
  {
    name: "Student Health & Wellness App - Full-Time Development",
    description:
      "Worked as part of a three-person development team to create a ground-breaking Flutter app for a renowned California university. My focus was on translating Figma designs into responsive and functional interfaces with an emphasis on ease-of-use and visual clarity. Experience was gained in communicating between various databases and backends and understanding the deployment cycle through AWS.",
    icon: DeviceTouchIcon,
    screen: FullTimeScreen,
    links: [],
  },
  {
    name: "Survivor Simulator - Personal Project",
    description:
      "I don't only code for work! In my spare time I also use my skills to create things that are more personalized to my interests and would be fun to use in everyday life. For example, I recently started an online simulator for the reality competition show \"Survivor\", which I have linked to the left.  Doing side projects like these not only allows me to brush up on skills and frameworks that I may not be currently using in my work life projects, but also are able to showcase my talents in a more unique, exciting, and most importantly, fun to create way!",
    icon: DeviceNotificationIcon,
    screen: SimulatorScreen,
    links: ["https://github.com/nicholasmentzer/survivorsim", "https://www.thesurvivorchains.com"],
  },
  {
    name: "Business Card App - Internship Project",
    description:
      "During my 2023 summer internship at BrickSimple LLC, I independently designed and developed a cross-platform mobile application using Flutter/Dart. The app enabled employees to share digital business cards through NFC, QR codes, and other contactless methods. As the sole developer on the project, I was responsible for every aspect of the build - from UI/UX design and state management to backend integration and deployment. The final product provided a streamlined, modern solution for professional contact sharing within the organization.",
    icon: DeviceTouchIcon,
    screen: InternScreen,
    links: [],
  },
  {
    name: "Firearm Control and Detection Website - Internship Project",
    description:
      "In the summer of 2022, I interned at BrickSimple LLC as part of a team tasked with developing a new frontend interface for a client specializing in firearm detection and control. My primary contribution was building a reusable library of custom-styled React components to support the application’s UI. Throughout the project, I participated in the full development lifecycle, including agile workflows such as weekly stand-ups, sprint planning, client meetings, and iterative testing. This experience strengthened my skills in collaborative development, responsive design, and problem-solving in a real-world production environment.",
    icon: DeviceTouchIcon,
    screen: InternScreen2,
    links: [],
  },
  {
    name: "Mobile Help Coach for College Students - Lehigh CSE Capstone",
    description:
      "As Lead Developer for my senior capstone project at Lehigh University, I helped design and build a full-stack mental health application tailored to the needs of college students. The app featured tools for journaling, group communication, and a location-based social feed to foster community support and engagement. I oversaw system design, front-end architecture, and team coordination, working primarily with Flutter, Dart, and cloud-based services to deliver a responsive and scalable solution. Through this and other multi-semester projects, I developed a strong foundation in software engineering principles, cross-functional teamwork, and end-to-end product development.",
    icon: DeviceUserIcon,
    screen: InviteScreen,
    links: [],
  },
  {
    name: "This website!",
    description:
      "I developed this portfolio website from the ground up as both a platform to showcase my coding skills and a learning opportunity to expand my technical toolkit. Since much of my previous work is proprietary and cannot be publicly shared, this site serves as a tangible representation of my abilities. Built using Next.js and Tailwind CSS, the project allowed me to deepen my understanding of modern web development practices while exploring tools that complemented my existing experience. It also gave me a chance to experiment with performance optimization, responsive design, and component-based architecture in a personal and creative context.",
    icon: DeviceNotificationIcon,
    screen: StocksScreen,
    links: ["https://github.com/nicholasmentzer/projectportfolio"],
  },
];