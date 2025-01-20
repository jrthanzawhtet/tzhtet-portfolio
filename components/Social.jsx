import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/jrthanzawhtet'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/tzhtet'},
    {icon: <FaTwitter />, path: 'https://twitter.com/home'}
];

const Social = ({containerStyles,iconsStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconsStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    );
};

export default Social;