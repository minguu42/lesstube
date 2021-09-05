import styles from "./styles.module.scss";

type Props = {
  title: string;
  contents: JSX.Element;
};

const SideSheet = ({ title, contents }: Props): JSX.Element => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    {contents}
  </div>
);

export default SideSheet;
