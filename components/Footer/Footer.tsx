// Nexts
import { useRouter } from "next/router";

// Styles
import s from "./Footer.module.css";

export const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div
      className={pathname === "/" ? `${s.footer} ${s.sticky}` : `${s.footer}`}
    >
      <div className={s.footer__container__left}>
        <div className={s.links}>
          <a href="mailto: kevcollazos@gmail.com">
            <p className={s.links__text}>
              <span className={s.point}>◘</span> kevcollazos@gmail.com
            </p>
          </a>
          <a
            href="https://www.instagram.com/kcollazos_/"
            target="_blank"
            rel="noreferrer"
          >
            <p className={s.links__text}>
              <span className={s.point}>◘</span> Instagram: @kcollazos_
            </p>
          </a>
        </div>
        <div className={s.links}>
          <a
            href="https://www.linkedin.com/in/kevcollazos/"
            target="_blank"
            rel="noreferrer"
          >
            <p className={s.links__text}>
              <span className={s.point}>◘</span> LinkedIn: @kevcollazos
            </p>
          </a>
          <a href="https://github.com/xKeCo" target="_blank" rel="noreferrer">
            <p className={s.links__text}>
              <span className={s.point}>◘</span> Github: @xKeCo
            </p>
          </a>
        </div>
      </div>
      <div className={s.footer__container__right}>
        <div className={s.site__version}>
          <p>&nbsp;</p>
          <p>
            <span className={s.point}>◘ </span>
            Kevin Collazos | 2023
          </p>
        </div>
      </div>
    </div>
  );
};
