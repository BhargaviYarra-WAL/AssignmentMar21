import { useState, useEffect } from "react";
import axios from "axios";
const Twitter = () => {
  let [tweet, setTweet] = useState([
    {
      title: "CCBPPG",
      body: "Wonderful platform for unemployees",
      doc: "2022-03-12",
      author: "CVReddy",
      category: "study",
    },
  ]);
  useEffect(() => {
    getTweet();
  }, []);
  const getTweet = () => {
    axios
      .get("/twitter")
      .then((res) => {
        setTweet(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addTweet = (event) => {
    event.preventDefault();
    let tweetObject = {
      title: event.target.title.value,
      body: event.target.body.value,
      doc: event.target.doc.value,
      author: event.target.author.value,
      category: event.target.category.value,
    };
    axios
      .post("/twitter", tweetObject)
      .then((res) => {
        getTweet(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteTweet = (indexToDelete) => {
    axios
      .delete("/twitter/" + indexToDelete)
      .then((res) => {
        setTweet([]);
      })
      .catch((error) => {
        console.log(error);
      });
    getTweet();
  };
  const deleteAll = () => {
    axios.get("/twitter/clearall").then((res) => {
      getTweet();
    });
  };

  return (
    <div>
      <h2>Twitter Application</h2>
      <form onSubmit={addTweet}>
        <input type='text' name='title' placeholder='Enter Tweet' />
        <br />
        <textarea name='body' placeholder='About' />
        <br />
        <input type='date' name='doc' placeholder='Date' />
        <br />
        <input type='text' name='author' placeholder='Author Name' />
        <br />

        <label>Select category</label>
        <br />
        <select name='category'>
          <option value='entertainment'>Entertainment</option>
          <option value='study'>Study</option>
          <option value='politics'>Politics</option>
          <option value='sports'>Sports</option>
        </select>
        <br />

        <button className='btn1'>Add Tweet</button>

        <br />
      </form>
      <button className='btn1' onClick={deleteAll}>
        Delete All
      </button>
      {tweet.map((val, index) => {
        return (
          <div className='showp'>
            <b>Tweet Title:</b>
            {val.title}
            <br />
            <b>About:</b>
            {val.body}
            <br />
            <b>Date Of Creation:</b>
            {val.doc}
            <br />
            <b>Author:</b>
            {val.author}
            <br />
            <b>Category:</b> {val.category}
            <br />
            <button className='btn1' onClick={() => deleteTweet(index)}>
              Delete Tweet
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Twitter;
