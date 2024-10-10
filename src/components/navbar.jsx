import React from "react";
import Logo from "../assets/LOGO.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="flex flex-wrap mx-2 w-25 h-25" src={Logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text -2xl">
                <FaLinkedin />
                <FaFacebook />
                <a href="https://www.instagram.com/marwnvry/"><FaInstagram /></a>
                <a href="https://x.com/nvvryyy?t=kwI2cbQ15e2d-hiZKeId4w&s=09"><FaSquareXTwitter /></a>
                <a href="https://www.tiktok.com/@marwnvryl?_t=8qOD9INrpf5&_r=1">< FaTiktok /></a>
                <a href="https://open.spotify.com/user/8j7t692n3ix92untsi85pam3i?si=Z7BWP8LVS6-7osby25jC1w&nd=1&dlsi=f70aea1cbd7048d7"><FaSpotify /></a>
                <FaPlaystation />
                <a href="https://discord.com/invite/yrBF7mcH">< FaDiscord /></a>
            </div>
            
        </nav>
    );
};

export default Navbar;
