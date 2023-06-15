import { ArticleHeader } from "./../articleUtils";

export default function Index() {
  return (
    <article>
      <ArticleHeader
        articleTitle={"CommonMark Tags"}
        articleSubtitle={
          "List of HTML tags that can be output by commonmark, excluding HTML blocks"
        }
      ></ArticleHeader>

      <ul>
        <li>h1</li>
        <li>h2</li>
        <li>h3</li>
        <li>h4</li>
        <li>h5</li>
        <li>h6</li>
        <li>blockquote</li>
        <li>hr</li>
        <li>li</li>
        <li>ol</li>
        <li>p</li>
        <li>pre</li>
        <li>ul</li>
        <li>a</li>
        <li>br</li>
        <li>code</li>
        <li>em</li>
        <li>strong</li>
        <li>img</li>
      </ul>
    </article>
  );
}
