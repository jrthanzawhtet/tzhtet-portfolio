"use client";

import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {Tooltip,TooltipContent,TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        num: '01',
        category: 'Member Web',
        title: 'Frontend',
        description: '',
        stack: [{
            name: 'Angular',
        },
            {
                name: 'Bootstrap',
            },
            {
                name: 'TypeScript',
            }
        ],
        image: '/assets/work/thumb1.png',
        github: ''
    },
    {
        num: '02',
        category: 'Member API',
        title: 'Backend',
        description: '',
        stack: [{
            name: 'Spring',
        }
        ],
        image: '/assets/work/thumb2.png',
        github: ''
    },
    {
        num: '03',
        category: 'BookStore',
        title: 'Frontend',
        description: '',
        stack: [{
            name: 'Spring',
        },{
            name: 'Tailwind.css',
        }, {
            name: 'React',
        },{
            name: 'Javascript',
        }
        ],
        image: '/assets/work/thumb3.png',
        github: ''
    },
]

const Work = () => {
    const [project, setProjects] = useState(projects[0]);
    const handleSlideChage = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProjects(projects[currentIndex]);
    }
    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex-col
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent
                            text-outline">{project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">{item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href="project.live">
                                    <TooltipProvider delay={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white
                                                    text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href="project.github">
                                    <TooltipProvider delay={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white
                                                    text-3xl group-hover:text-accent" />
                                                <TooltipContent>
                                                    <p>GitHub repository </p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl-h-[520px] mb-12"
                        onSlideChange={handleSlideChage}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} alt=""
                                                fill className="object-cover" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;