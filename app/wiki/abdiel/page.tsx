import Image from "next/image";
import abdielImage from "/public/Continent.png";

export default function Index() {
  return (
    <>
      <h1>Abdiel</h1>
      <Image src={abdielImage} alt="Abdiel Subcontinent" width={800}></Image>
    </>
  );
}
