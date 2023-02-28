import Link from "next/link";
import { Fragment } from "react";
import styles from "styles/components/FooterStyles";

const Footer = () => {
  return (
    <Fragment>
      <footer className="Fixed_bottom Font_size12px">
        <div>
          <Link href="/privacy">
            <u>Privacy Policy</u>
          </Link>{" "}
          <a href="/rss.xml">
            <u>RSS</u>
          </a>
          <br />
          <Link href="/">© --- 2023</Link>
        </div>
      </footer>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Footer;
