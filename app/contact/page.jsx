"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "thanzawhtet18@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "MICT Park\n Bldg 12, Thamine College St, Yangon",
    },
];

const Contact = () => {
    const formRef = useRef(null);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false); // Track submission success
    const [selectedService, setSelectedService] = useState(""); // Add this line to manage dropdown state

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zfm8cugtzhtet",
                "template_118rh6p",
                formRef.current,
                "wU4wqnM2lySzbIQzn"
            )
            .then((result) => {
                setIsSuccess(true);
                setMessage("Email sent successfully!");
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage("Failed to send email: " + error.text);
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <Input type="text" name="name" placeholder="Full Name"/>
                            <Input type="email" name="email" placeholder="Email address"/>
                            <Input type="text" name="phone" placeholder="Phone number"/>
                            <Input type="hidden" name="selectedService" value={selectedService}/>
                            <Select onValueChange={(value) => setSelectedService(value)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Spring Backend">Spring Backend</SelectItem>
                                        <SelectItem value="Cloud Solutions">Cloud Solutions</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div
                        className="flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
                    >
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                            bg-[#27272c] text-accent rounded-md flex items-center
                                            justify-center"
                                    >
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
