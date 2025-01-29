import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  // Retrieve the slug from the URL
  const newsId = params.slug;

  // Find the news item with the matching slug
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsId);

  // Handle not found case
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            className="news-image"
          />
        </Link>

        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <main>
        <p>{newsItem.content}</p>
      </main>
    </article>
  );
}
