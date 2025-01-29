"use client";
import NewsList from "@/components/news-list";
import { useState, useEffect } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("failed to fetch news.");
        setIsLoading(false);
      }
      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    <p>Loading...</p>;
  }
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
