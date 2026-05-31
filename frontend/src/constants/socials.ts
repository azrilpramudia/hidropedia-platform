import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

/**
 * Social media links — dipakai di Footer
 */
export const SOCIAL_LINKS = [
  { Icon: FaFacebook,  href: "#", label: "Facebook",  color: "hover:text-blue-600" },
  { Icon: FaInstagram, href: "#", label: "Instagram",  color: "hover:text-pink-600" },
  { Icon: FaYoutube,   href: "#", label: "YouTube",    color: "hover:text-red-600" },
  { Icon: FaLinkedin,  href: "#", label: "LinkedIn",   color: "hover:text-blue-700" },
] as const;
