// React
import { useState } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Styles
import s from "./Navbar.module.css";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    // {
    //   name: "Projects",
    //   path: "#projects-grid",
    // },
    {
      name: "About",
      path: "/about",
    },
  ];

  // Handle responsive menu
  const [open, setOpen] = useState(false);

  // Router
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links__container}>
        {links.map((link) => (
          <Link href={link.path} key={link.path}>
            <div
              className={`${s.navbar__link} ${link.name}  ${
                pathname === link.path && s.active
              }`}
            >
              <p className={s.navbar__link__text}>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.navbar__links__container__responsive}>
        <div
          className={`${s.menu__responsive} ${open ? s.close : s.menu}`}
          onClick={() => setOpen(!open)}
        >
          <p className={`${s.navbar__link__text}`}>
            {open ? (
              <span className={s.close}>X</span>
            ) : (
              <span className={s.menu}>Menu</span>
            )}
          </p>
        </div>
        {links.map((link) => (
          <div
            key={link.path}
            className={` ${s.navbar__link__responsive} ${
              link.name === "Projects"
                ? s.project
                : link.name === "About"
                ? s.about
                : s.home
            } ${open && s.open} ${open && pathname === link.path && s.active}`}
            onClick={() => setOpen(false)}
          >
            <Link href={link.path}>
              <div>
                <p className={s.navbar__link__text}>{link.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
