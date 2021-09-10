import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export const TopAppBar = (): JSX.Element => (
  <header className={styles.container}>
    <h2 className={styles.title}>
      <Link href="/">
        <a className={styles.titleLayout}>
          <Image
            src="/logo.png"
            alt="LessTube のロゴ画像"
            width={32}
            height={32}
          />
          LessTube
        </a>
      </Link>
    </h2>
  </header>
);

export default TopAppBar;
