import React from "react";

import styles from "./styles.module.scss";

type Props = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const OutlinedButton = ({ label, onClick }: Props): JSX.Element => (
  <button onClick={onClick} className={styles.outlinedButton}>
    {label}
  </button>
);
