// Styles
import s from "../styles/Home.module.css";

// Local Components
import { Layout } from "../components";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className={s.main}>
          <div className={s.hero}>
            <div className={`${s.main__container} `}>
              <div className={`${s.main__links}`}>
                <a href="#" className={`${s.email}`}>
                  <div className={`${s.letters} `}>
                    <h1 className={s.main__text}>
                      <span className={`${s.letter} ${s.l0} ${s.point}`}>
                        ◘
                      </span>
                      <span className={`${s.blank__space}`}>&nbsp;</span>
                      <span className={`${s.letter} ${s.l1} `}>E</span>
                      <span className={`${s.letter} ${s.l2}`}>m</span>
                      <span className={`${s.letter} ${s.l3}`}>a</span>
                      <span className={`${s.letter} ${s.l4}`}>i</span>
                      <span className={`${s.letter} ${s.l5}`}>l</span>
                    </h1>
                  </div>
                </a>
                <a href="" className={`${s.cv}`}>
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
                <h1 className={s.main__text}>Software Engineer</h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
