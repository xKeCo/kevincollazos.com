// Next
import Head from 'next/head';

type props = {
  title: string;
};

export const SEO = ({ title }: props) => {
  const message = `${title}`;
  return (
    <Head>
      <title>{message}</title>
      <meta name="description" content="Persona portfolio of Kevin Collazos" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};
