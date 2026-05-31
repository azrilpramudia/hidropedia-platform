import { Home, FileText, FolderOpen, Info, Phone } from "lucide-react";

/**
 * Nav links utama — dipakai di Navbar dan Footer
 */
export const NAV_LINKS = [
  { label: "Home",      href: "/",          icon: Home },
  { label: "Articles",  href: "/artikel",   icon: FileText },
  { label: "Resources", href: "/resources", icon: FolderOpen },
  { label: "About",     href: "/tentang",   icon: Info },
  { label: "Contact",   href: "/kontak",    icon: Phone },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
