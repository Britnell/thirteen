import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div>
        <ul>
          <li>
            <Link href="/routing">Routing</Link>
          </li>
          {/* <li>
            <Link href="/routing">Routing</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
