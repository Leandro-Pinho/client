import React, { useContext, useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { PiPencilLine } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();

  const nagivate = useNavigate();

  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [postId]);

  // deletar post
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      nagivate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt='' />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {
            currentUser.username === post.username && <div className="edit">
              <Link to={`/write?edit=2`}>
                <div className="iconEdit">
                  <PiPencilLine />
                </div>
              </Link>
              <Link to={`/write?edit=2`} >
                <div className="iconDel">
                  <FaTrash onClick={handleDelete} />
                </div>
              </Link>
            </div>
          }
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default Single
