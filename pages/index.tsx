// Framer Motion
import { motion, useScroll, useTransform } from 'framer-motion';

// Hooks
import { useProjects } from '../hooks';

// Local Components
import { CardView, Loader, SEO } from '../components';

// Styles
import s from '../styles/Home.module.css';

export default function Home() {
  // ScrollY Tracker
  const { scrollYProgress } = useScroll({ offset: ['0px', '670px'] });

  // Styles when Scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0.1, 1], [1, 0.1]);

  const { loading, error } = useProjects();

  return (
    <>
      <SEO title="Kevin Collazos" />
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className={s.main}>
            <motion.div
              className={s.hero}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.7 },
              }}
              style={{ opacity, scale }}
            >
              <div className={`${s.main__container}`}>
                <div className={`${s.main__links}`}>
                  <a
                    href="mailto:kevcollazos@gmail.com"
                    className={`${s.email}`}
                  >
                    <div className={`${s.letters} `}>
                      <h1 className={s.main__text}>
                        <span className={`${s.letter} ${s.l0} ${s.point}`}>
                          ◘
                        </span>
                        <span className={`${s.blank__space}`}>&nbsp;</span>
                        <span className={`${s.letter} ${s.l1}`}>E</span>
                        <span className={`${s.letter} ${s.l2}`}>m</span>
                        <span className={`${s.letter} ${s.l3}`}>a</span>
                        <span className={`${s.letter} ${s.l4}`}>i</span>
                        <span className={`${s.letter} ${s.l5}`}>l </span>
                      </h1>
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15RXGwQbZ_IDQy4AbbzPAeP1Rqw_CBuFH/view?usp=sharing"
                    className={`${s.cv}`}
                    rel="noreferrer"
                  >
                    <div className={`${s.letters} `}>
                      <h1 className={s.main__text}>
                        <span className={`${s.letter} ${s.l1} ${s.point}`}>
                          ◘
                        </span>
                        <span className={`${s.blank__space}`}>&nbsp;</span>
                        <span className={`${s.letter} ${s.l2}`}>C</span>
                        <span className={`${s.letter} ${s.l5}`}>V</span>
                      </h1>
                    </div>
                  </a>
                </div>
                <div className={`${s.name}`}>
                  <h1 className={s.main__text}>Kevin Collazos</h1>
                </div>
                <div className={`${s.role}`}>
                  <h1 className={s.main__text}>Frontend Developer</h1>
                </div>
              </div>
            </motion.div>
          </div>

          <CardView />
        </>
      )}
    </>
  );
}
