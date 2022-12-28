// Components
import { Footer, Navbar, SEO } from "..";

// Styles
import s from "./Layout.module.css";

type props = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: props) => {
  return (
    <>
      <SEO title={title} />
      <div className={s.layout}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};
