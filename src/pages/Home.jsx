import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search
  console.log(cat)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem Ipsum is simply dummy",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     img: "https://assets.entrepreneur.com/content/3x2/2000/20200316215711-GettyImages-1134244640.jpeg"
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem Ipsum is simply dummy",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/05/17/web-road-trip-rex.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem Ipsum is simply dummy",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     img: "https://images.idgesg.net/images/article/2021/11/screen-shot-remote-worker-100911114-large.jpg?auto=webp&quality=85,70"
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem Ipsum is simply dummy",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetMbfcCtJLF5-4XF-LPJvssWvVTNLMrlnlFmbQ9hqhiZ-1KZst56o0Dq47aO2ZnNskSE&usqp=CAU"
  //   },
  // ]


  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt='' />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
