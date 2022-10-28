import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
