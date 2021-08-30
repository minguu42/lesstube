import styles from "components/landing/Hello/styles.module.scss";

export const Hello = (): JSX.Element => (
  <h1 className={styles.title}>
    Hello,{" "}
    <a href="https://github.com/minguu42/next-app-template">
      Next App Template
    </a>
    !
  </h1>
);

export default Hello;
