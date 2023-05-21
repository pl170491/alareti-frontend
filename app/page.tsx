// import Image from "next/image";
// import styles from "./page.module.css";

function DefaultWiki() {
  return (
    <>
      <h1>DnD Resources for the Guyarchy</h1>
      <ul>
        <li>
          <a href="/wiki">Wiki</a>
        </li>
        <li>
          <a href="/log">Adventure Log</a>
        </li>
        <li>
          {" "}
          <a href="/wiki/kastor-neroon">Kastor Neroon</a>
        </li>
      </ul>
    </>
  );
}

async function getData() {
  const res = await fetch("https://api.alareti.com/");

  return res;
}

export default async function Home() {
  const debug = false;

  if (debug) {
    const res = await getData();
    const resStatus = res.status;
    console.log(resStatus);

    return <p>{resStatus}</p>;
  } else {
    return <DefaultWiki></DefaultWiki>;
  }
}
