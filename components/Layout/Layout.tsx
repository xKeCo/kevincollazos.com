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
      <Navbar />
      <div className={s.layout}>{children}</div>
      <Footer />
    </>
  );
};
