/* eslint-disable @next/next/no-img-element */
// Next
import Link from 'next/link';
import Image from 'next/image';

// Styles
import s from './Card.module.css';

type props = {
  title: string;
  status: string;
  src: string;
  alt: string;
};

export const Card = ({ title, status, src, alt }: props) => {
  return (
    <div className={s.card}>
      <Link href={`/project/${title}`}>
        <div className={s.card__image__container}>
          <img
            src={src || '/images/placeholder.png'}
            alt={alt}
            className={s.image}
            width="100%"
          />
        </div>
        <div className={s.card__details}>
          <div className={s.card__text}>
            <h1 className={s.card__title}>{title}</h1>
            <Image
              src="/icons/arrow-left.svg"
              alt="Arrow"
              width={25}
              height={25}
            />
          </div>
          <div className={s.card__status}>
            <h3 className={s.card__description}>{status}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
