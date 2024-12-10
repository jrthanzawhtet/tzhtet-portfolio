"use client";

import {BsArrowDown, BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion';
const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Expertise in Angular and React for building responsive and modern web applications.",
        href: "https://github.com/jrthanzawhtet/Yum-Eat",
    },
    {
        num: "02",
        title: "Java Development",
        description: "Specialized in Java, Spring MVC, and Spring Boot for robust backend solutions and banking solutions.",
        href: "https://github.com/jrthanzawhtet/Spring-project-based-learning",
    },
    {
        num: "03",
        title: "Cloud Services",
        description: "Offering cloud infrastructure and deployment solutions for scalable applications.",
        href: "https://github.com/jrthanzawhtet",
    },
    {
        num: "04",
        title: "Docker Solutions",
        description: "Containerization using Docker for efficient and consistent deployment workflows.",
        href: "https://github.com/jrthanzawhtet",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container max-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{ opacity: 1 ,
                    transaction: {delay: 2.4} , duration: 0.4 , ease: 'easeIn' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6
                            group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover
                                    transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full
                                    bg-white group-hover:bg-accent transition-all  duration-500
                                    flex justify-center items-center hover:-rotate-45" >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export  default  Services;