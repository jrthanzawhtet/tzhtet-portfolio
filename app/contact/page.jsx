"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+95)9 971 471 514",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "thanzawhtet18@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "MIT Innovation Hub\n 656, E Gyo Gone St, Yangon",
    }
];

import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
                            <p className="text-white/60">
                                I’m passionate about building efficient, user-friendly applications.
                                Whether you need a
                                reliable developer for your team or a freelancer for your project,
                                I’d love to collaborate and bring your ideas to life.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First Name" />
                                <Input type="lastname" placeholder="Last Name" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />

                            </div>
                            {/* Select */}
                            <Select>
                                <SelectTrigger>
                                    <SelectValue>

                                    </SelectValue>
                                </SelectTrigger>
                            </Select>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0">
                        info
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export  default  Contact;