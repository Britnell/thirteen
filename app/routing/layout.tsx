import Link from "next/link";
import React, { ReactNode } from "react";

const getDate = async () => new Date();

export default async function Layout({ children }: { children: ReactNode }) {
  const date = await getDate();

  return (
    <div>
      <header>
        <h2>Routing header</h2>
      </header>
      <div>{children}</div>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <li>Pages : </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/routing">Routing</Link>
              <ul>
                <li>
                  <Link href="/routing/joke">joke</Link>
                </li>
                <li>
                  <Link href="/routing/colour">Colours</Link>
                </li>
                <li>
                  <Link href="/routing/client">Client render</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        This was rendered at {date.toUTCString()} #{date.getTime()})
      </footer>
    </div>
  );
}
