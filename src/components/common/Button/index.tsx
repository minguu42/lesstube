import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

type OutlinedButtonProps = {
  label: string;
  ariaLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type OutlinedLinkButtonProps = {
  label: string;
  url: string;
};

export const OutlinedButton = ({
  label,
  ariaLabel,
  onClick,
}: OutlinedButtonProps): JSX.Element => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    className={styles.outlinedButton}
  >
    {label}
  </button>
);

export const OutlinedLinkButton = ({
  label,
  url,
}: OutlinedLinkButtonProps): JSX.Element => (
  <Link href={url}>
    <a className={styles.outlinedButton}>{label}</a>
  </Link>
);
