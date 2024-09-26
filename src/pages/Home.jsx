import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
           <Navbar />
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ id, title, content }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2 flex-grow">
                {content.substring(0, 100)}...
              </p>
              <Link
                to={`/post/${id}`}
                className="mt-4 text-blue-600 hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>

      </main>
      <Footer />

    </div>
    
  );
}

export default Home;
