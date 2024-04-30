import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo"></div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
