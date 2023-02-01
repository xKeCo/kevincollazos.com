// Components
import { Footer, Navbar } from "..";

// Styles
import s from "./Layout.module.css";

type props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: props) => {
  return (
    <>
      <div className={s.layout}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};
