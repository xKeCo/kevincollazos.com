import Link from "next/link";
import s from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const links = [
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  // Handle responsive menu

  const [open, setOpen] = useState(false);

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links__container}>
        {links.map((link) => (
          <Link href={link.path} key={link.path}>
            <div className={`${s.navbar__link} ${link.name}`}>
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
              link.name === "Projects" ? s.project : s.about
            } ${open && s.open}`}
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
