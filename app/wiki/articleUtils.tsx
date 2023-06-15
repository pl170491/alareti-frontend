export function ArticleHeader({
  // Need to ensure these strings don't contain anything funky
  articleTitle,
  articleSubtitle,
}: {
  articleTitle: string;
  articleSubtitle: string | null;
}) {
  let subtitle = <></>;
  if (articleSubtitle) subtitle = <p>{articleSubtitle}</p>;
  return (
    <header>
      <h1>{articleTitle}</h1>
      {subtitle}
    </header>
  );
}
