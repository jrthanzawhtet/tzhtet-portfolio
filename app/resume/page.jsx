"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaJava, FaGit, FaGithub} from 'react-icons/fa';

import {
    SiTailwindcss, SiNextdotjs,SiSpring,
} from 'react-icons/si'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from  '@/components/ui/tooltip';

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from 'framer-motion';
import {Tabs, TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

const about = {
    title: 'About me',
    description:`I am a software developer skilled in Angular, React, and Java Spring. I create modern web apps and backend systems with a focus on quality and scalability.`,
    info: [
        {
            fileName: 'Name',
            fileValue: 'Than Zaw Htet'
        },
        {
            fileName: 'Phone',
            fileValue: '(+95) 997 147 1514'
        },
        {
            fileName: 'Experience',
            fileValue: '1+ Yeas'
        },
        {
            fileName: 'Nationality',
            fileValue: 'Myanmar'
        },
        {
            fileName: 'Email',
            fileValue: 'thanzawhtet18@gmail.com'
        },
        {
            fileName: 'Freelance',
            fileValue: 'Available'
        },
        {
            fileName: 'Languages',
            fileValue: 'English, Japanese'
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Over 1 years of experience in web development, ' +
        'backend systems, and cloud solutions. Skilled in Angular,' +
        ' React, Java Spring, and Docker.',
    items: [
        {
            company: "MIT Innovation Hub ",
            position: "Full Stack Developer",
            duration: "2024 - Present"
        }
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Pursuing a Bachelor’s degree in Computer Science. Gaining a strong foundation in software development, algorithms, and problem-solving skills.',

    items: [
        {
            institution: "University of the People (UOP)",
            degree: "Bachelor of Science in Computer Science",
            duration: "2024 - Present"
        },
        {
            institution: "Java Developer Class",
            degree: "Developer Certification",
            duration: "2023 - 2024"
        },
        {
            institution: "BS Camp",
            degree: "Computer Science Course",
            duration: "2022 - 2023"
        },
    ]
}

const skills = {
    title: 'My Skills',
    description: 'A showcase of my technical proficiencies and tools I use for development.',
    skillList: [
        {
            icon: <FaHtml5/>,
            name: 'html 5',
        },

        {
            icon: <FaCss3 />,
            name: 'Css 3',
        },

        {
            icon: <FaJava />,
            name: 'Java',
        },

        {
            icon: <SiSpring />,
            name: 'Spring Framework',
        },

        {
            icon: <FaAngular />,
            name: 'Angular',
        },

        {
            icon: <FaGit />,
            name: 'Git'
        },

        {
            icon: <FaJs />,
            name: 'Javascript',
        },

        {
            icon: <FaReact />,
            name: 'react.js'
        },

        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },

        {
            icon: <FaGithub />,
            name: 'Github',
        },

        {
            icon: <SiTailwindcss/>,
            name: 'Tailwindcss',
        },
    ]
};
const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                    }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container max-auto">
                <Tabs  defaultValue="experience"
                      className="flex flex-col xl:flex-row gap-[60px]">

                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export  default  Resume;