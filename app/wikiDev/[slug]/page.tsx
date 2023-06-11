// function streamToString(stream: ReadableStream<Uint8Array>) {
//   const chunks: any[] = [];
//   return new Promise((resolve, reject) => {
//     stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
//     stream.on("error", (err) => reject(err));
//     stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
//   });
// }

async function fetchArticle(slug: string) {
  const res = await fetch("https://api.alareti.com/wiki/" + slug, {
    method: "GET",
    // headers: {
    // "content-type": "application/octet-stream",
    //   "access-control-allow-origin": "*",
    //   "access-control-allow-methods": "POST, OPTIONS",
    //   "access-control-allow-headers":
    //     "access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
    // },
    // body: JSON.stringify({ hello: "there" }),
  });
  console.log(res);
  // const body = await res.blob();
  // console.log(body);
  // console.log(await body.text());
}

export default function Index({ params }: { params: { slug: string } }) {
  console.log(params);
  const slug = params.slug;
  fetchArticle(slug);
  return <></>;
}
