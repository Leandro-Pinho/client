import React from 'react'
import { FaTrash } from "react-icons/fa";
import { PiPencilLine } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/20200316215711-GettyImages-1134244640.jpeg" alt='' />
        <div className="user">
          <img src="https://www.success.com/wp-content/uploads/2017/09/Want-to-Be-Successful-Do-These-7-Things-in-Your-Spare-Time.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <div className="iconEdit">
                <PiPencilLine />
              </div>
            </Link>
            <Link to={`/write?edit=2`} >
              <div className="iconDel">
                <FaTrash />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h1>There are many variations of passages of Lorem Ipsum</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default Single
