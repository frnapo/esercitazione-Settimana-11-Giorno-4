import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { IArticle } from "../types/interfaces";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
