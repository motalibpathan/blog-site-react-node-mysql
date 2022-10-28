import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     description:
  //       "Atque nihil excepturi pariatur, explicabo porro velit voluptate, reiciendis beatae praesentium iure, impedit animi. Aliquid ea possimus distinctio adipisci quibusdam iure consequatur unde itaque dolor nesciunt et sequi alias",
  //     img: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     description:
  //       "Atque nihil excepturi pariatur, explicabo porro velit voluptate, reiciendis beatae praesentium iure, impedit animi. Aliquid ea possimus distinctio adipisci quibusdam iure consequatur unde itaque dolor nesciunt et sequi alias",
  //     img: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     description:
  //       "Atque nihil excepturi pariatur, explicabo porro velit voluptate, reiciendis beatae praesentium iure, impedit animi. Aliquid ea possimus distinctio adipisci quibusdam iure consequatur unde itaque dolor nesciunt et sequi alias",
  //     img: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     description:
  //       "Atque nihil excepturi pariatur, explicabo porro velit voluptate, reiciendis beatae praesentium iure, impedit animi. Aliquid ea possimus distinctio adipisci quibusdam iure consequatur unde itaque dolor nesciunt et sequi alias",
  //     img: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     description:
  //       "Atque nihil excepturi pariatur, explicabo porro velit voluptate, reiciendis beatae praesentium iure, impedit animi. Aliquid ea possimus distinctio adipisci quibusdam iure consequatur unde itaque dolor nesciunt et sequi alias",
  //     img: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.description)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
