// Styles
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__container__left}>
        <div className={s.links}>
          <p>
            <span className={s.point}>◘</span> kevcollazos@gmail.com
          </p>
          <p>
            <span className={s.point}>◘</span> Instagram: @kcollazos_
          </p>
        </div>
        <div className={s.links}>
          <p>
            <span className={s.point}>◘</span> LinkedIn: @kevcollazos
          </p>
          <p>
            <span className={s.point}>◘</span> Github: @xKeCo
          </p>
        </div>
      </div>
      <div className={s.footer__container__right}>
        <div className={s.site__version}>
          <p>&nbsp;</p>
          <p>
            <span className={s.point}>◘ </span>
            Kevin Collazos 2023
          </p>
        </div>
      </div>
    </div>
  );
};
