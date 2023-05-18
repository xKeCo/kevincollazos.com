// Next
import Image from 'next/image';

// Local Components
import { SEO } from '../components';

// Styles
import s from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <SEO title="KC | About" />
      <div className={s.about}>
        <div className={s.about__details}>
          <h1 className={s.about__title}>
            Hi, I&apos;m Kevin Collazos. I am Frontend Developer with a passion
            for creating beautiful and intuitive experiences. Waiting for a new
            challenge.
          </h1>
          <div className={s.about__image__container}>
            <Image
              className={s.about__image}
              src="/images/aboutImage.jpg"
              alt="Photo of Kevin Collazos"
              placeholder="blur"
              blurDataURL={'/images/placeholder.png'}
              fill
              priority
            />
          </div>
        </div>

        <div className={s.about__description}>
          <p className={s.about__description__text}>
            As a developer, I enjoy being able to create experiences and tools
            that allow people to not only work efficiently, but also carve out a
            place in the digital world. I love the concept of entering and
            feeling that in this digital world each of the ideas that our mind
            proposes can be captured and made a reality.
          </p>
          <p className={s.about__description__text}>
            Favorite technology: Next.js w/ Typescript.
          </p>

          <p className={s.about__description__text}>
            Feel free to reach me out. :D
          </p>
        </div>
      </div>
    </>
  );
}
