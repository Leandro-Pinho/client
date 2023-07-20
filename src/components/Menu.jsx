import React from 'react'

const Menu = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "https://assets.entrepreneur.com/content/3x2/2000/20200316215711-GettyImages-1134244640.jpeg"
        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/05/17/web-road-trip-rex.jpg"
        },
        {
            id: 3,
            title: "Lorem Ipsum is simply dummy",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "https://images.idgesg.net/images/article/2021/11/screen-shot-remote-worker-100911114-large.jpg?auto=webp&quality=85,70"
        },
        {
            id: 4,
            title: "Lorem Ipsum is simply dummy",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetMbfcCtJLF5-4XF-LPJvssWvVTNLMrlnlFmbQ9hqhiZ-1KZst56o0Dq47aO2ZnNskSE&usqp=CAU"
        },
    ]

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
