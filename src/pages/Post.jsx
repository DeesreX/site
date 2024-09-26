import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8 max-w-3xl">
        {/* Featured Image */}
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        <article className="prose lg:prose-xl mx-auto">
          <h1 className="mb-2">{post.title}</h1>

          {/* Author and Date */}
          {(post.author || post.date) && (
            <div className="text-gray-500 text-sm mb-4">
              {post.author && <span>By {post.author}</span>}
              {post.author && post.date && <span> • </span>}
              {post.date && (
                <span>{new Date(post.date).toLocaleDateString()}</span>
              )}
            </div>
          )}

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => (
                <img
                  className="w-full h-auto my-4 rounded"
                  {...props}
                  alt={props.alt}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export default Post;
