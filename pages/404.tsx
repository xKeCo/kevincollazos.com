// Local Components
import { Marquee, SEO } from '../components';

// Styles
import s from '../styles/404.module.css';

function FourOhFour() {
  return (
    <>
      <SEO title="Page Not Found - 404" />
      <div className={s.pageNotFound}>
        <Marquee baseVelocity={-1.5}> | PAGE NOT FOUND | </Marquee>
        <Marquee baseVelocity={1.5}> | PAGE NOT FOUND | </Marquee>
      </div>
    </>
  );
}

export default FourOhFour;
