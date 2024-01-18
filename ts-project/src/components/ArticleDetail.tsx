import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IArticle } from "../types/interfaces";

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then((response) => response.json())
        .then((data) => setArticle(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1>{article.title}</h1>
          <img src={article.image_url} className="img-fluid mb-4" alt={article.title} />
          <p className="text-muted">Published on: {new Date(article.published_at).toLocaleDateString()}</p>
          {article.updated_at && (
            <p className="text-muted">Updated on: {new Date(article.updated_at).toLocaleDateString()}</p>
          )}
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mb-5">
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
