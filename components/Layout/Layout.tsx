// Components
import { Footer, Navbar } from '..';

// Styles
import s from './Layout.module.css';

type TLayout = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayout) => {
  return (
    <div className={s.layout}>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
