// import Image from "next/image";
// import styles from "./page.module.css";

"use client";

import { useState } from "react";

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
          <a href="/wiki/kastor-neroon">Kastor Neroon</a>
        </li>
      </ul>
    </>
  );
}

// async function getData(e: React.FormEvent) {
//   e.preventDefault();
// }

export default function CreateWiki() {
  const [createWikiTitle, setCreateWikiTitle] = useState("");

  function handleCreateWikiTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentCreateWikiTitle = e.target.value;
    setCreateWikiTitle(currentCreateWikiTitle);
  }

  async function handleCreateSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(createWikiTitle);
    const res = await fetch("https://api.alareti.com/wiki", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers":
          "access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
      },
      body: JSON.stringify({ hello: "there" }),
    });
    console.log(res);
  }

  async function handleDeleteSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(
      "https://api.alareti.com/wiki/b42f78a8-17da-415c-ad17-24da4eba2ea9",
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "DELETE, OPTIONS",
          "access-control-allow-headers":
            "access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
        },
        body: JSON.stringify({ hello: "there" }),
      }
    );
    console.log(res);
  }

  // const res = await getData();
  // const resStatus = res.status;
  // console.log(resStatus);
  return (
    <>
      <form onSubmit={handleCreateSubmit}>
        <label htmlFor="createWikiTitle">Create a new wiki:</label>
        <br />
        <input
          type="text"
          id="createWikiTitle"
          name="createWikiTitle"
          value={createWikiTitle}
          onChange={handleCreateWikiTitleChange}
        />
        <input type="submit" value="Create" />
      </form>
      <form onSubmit={handleDeleteSubmit}>
        <label htmlFor="createWikiTitle">Delete said wiki:</label>
        <br />
        {/* <input
          type="text"
          id="createWikiTitle"
          name="createWikiTitle"
          value={createWikiTitle}
          onChange={handleCreateWikiTitleChange}
        /> */}
        <input type="submit" value="Delete" />
      </form>
    </>
  );
}
