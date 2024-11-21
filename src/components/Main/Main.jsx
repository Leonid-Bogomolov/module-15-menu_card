import React, { useState } from "react";
import Post from "../Post/Post";
import './main.css'
import myImage1 from '../Post/Images/p1.jpg'
import myImage2 from '../Post/Images/p2.gif'
import myImage3 from '../Post/Images/p3.jpg'
import myImage4 from '../Post/Images/p4.jpg'
import myImage5 from '../Post/Images/p5.webp'
import myImage6 from '../Post/Images/p6.webp'
import myImage7 from '../Post/Images/p7.webp'

const Main = () => {

  const posts = [
    { id: 1, name: "Маша", image: myImage1, age: "25 лет", statut: "разведена", profession: "массажистка", favor: false },
    { id: 2, name: "Валя", image: myImage2, age: "90 лет", statut: "вдова", profession: "пенсионерка", favor: true },
    { id: 3, name: "Катя", image: myImage3, age: "30 лет", statut: "замужем", profession: "медсестра", favor: false },
    { id: 4, name: "Роза", image: myImage4, age: "40 лет", statut: "замужем", profession: "бармен", favor: false },
    { id: 5, name: "Рая", image: myImage5, age: "45 лет", statut: "разведена", profession: "преподаватель танцев", favor: false },
    { id: 6, name: "Галя", image: myImage6, age: "60 лет", statut: "замужем", profession: "тренер по аэробике", favor: false },
    { id: 7, name: "Аня", image: myImage7, age: "18 лет", statut: "не замужем", profession: "студентка", favor: true },
  ]

  const [mainPosts, setMainPosts] = useState(posts)

  const deletePosts = (id) => {
    setMainPosts(mainPosts.filter(post => post.id !== id))
  }

  const addToFavor = (id) => {
    setMainPosts(mainPosts.map((post) => {
      if (post.id === id) {
        post.favor = !post.favor
      }
      return post
    }))
  }

  const changePost = (newPost) => {
    setMainPosts(mainPosts.map((post) => {
      if (post.id === newPost.id) {
        post.name = newPost.name
        post.age = newPost.age
        post.statut = newPost.statut
        post.profession = newPost.profession
      }
      return post
    }))
  }

  return (
    <>
      <div className="post-container">
        {mainPosts.map(post =>
          <Post key={post.id} post={post} deletePosts={deletePosts} addToFavor={addToFavor} changePost={changePost} />
        )}
      </div>
    </>
  );
}

export default Main;
