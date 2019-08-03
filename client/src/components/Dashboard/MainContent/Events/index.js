import React, { useState } from 'react';
import './Events.css';

//Components
import Card from '../../../Cards';
import Comment from '../Comment';
import Likes from '../Likes';

function Events() {
  const [commentState, setCommentState] = useState(false);

  const commentsHandler = e => {
    e.preventDefault();
    setCommentState(!commentState);
  };

  const cardStyle = {
    width: '100%',
    margin: '0 auto 30px auto',
    background: '#FFF',
    borderRadius: '4px',
    display: 'flex',
    border: '1px solid #e6ecf5',
    height: 'fit-content',
    boxSizing: 'border-box',
    flexDirection: 'column',
    padding: '25px',
    transition: 'all linear 0.2s'
  };
  return (
    <div className="eventMason">
      <Card cardStyle={cardStyle}>
        <div className="postHeader">
          <img alt="avatar" src="/assets/img/avatar7-sm.jpg" />
          <div className="authorDetails">
            <a href="/">Marina Valentine</a> shared a <a href="/">BBA</a>
            <br />
            <time>March 4 at 2:05pm</time>
          </div>
          <div className="eventDropArea">
            <nav>
              <i className="mdi mdi-dots-horizontal" />
            </nav>
          </div>
        </div>
        <p className="eventDes">
          Hey <a href="/">Cindi</a>, you should really check out this new song
          by Iron Maid. The next time they come to the city we should totally
          go!
        </p>
        <Likes commentsHandler={commentsHandler} />
        {commentState ? <Comment /> : ''}
      </Card>
      <Card cardStyle={cardStyle}>
        <div className="postHeader">
          <img alt="avatar" src="/assets/img/avatar5-sm.jpg" />
          <div className="authorDetails">
            <a href="/">Green Goo Rock </a> <a href="/">The Voice</a>
            <br />
            <time>March 8 at 6:42pm</time>
          </div>
          <div className="eventDropArea">
            <nav>
              <i className="mdi mdi-dots-horizontal" />
            </nav>
          </div>
        </div>
        <p className="eventDes">
          Hey guys! We are gona be playing this Saturday of{' '}
          <a href="/">The Marina Bar</a> for their new Mystic Deer Party. If you
          wanna hang out and have a really good time, come and join us. We’l be
          waiting for you!
        </p>
        <div className="eventThumb">
          <img alt="event" src="/assets/img/post__thumb1.jpg" />
        </div>
        <div className="postFooter">
          <button type="submit" id="likeEvent">
            <i className="mdi mdi-heart-outline" />
            <label htmlFor="likeEvent">
              <span>24</span>
            </label>
          </button>
          <ul class="postLikes">
            <li>
              <a href="/">
                <img src="/assets/img/friend-harmonic7.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/assets/img/friend-harmonic8.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/assets/img/friend-harmonic9.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/assets/img/friend-harmonic10.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/assets/img/friend-harmonic11.jpg" alt="friend" />
              </a>
            </li>
          </ul>
          <div className="eventLikesNames">
            <a href="/">Tega</a>, <a href="/">Ibrahim</a> and
            <br />
            10 more liked this
          </div>
          <p>3,000+ votes</p>
          <div className="eventAction">
            <i className="mdi mdi-comment-outline" />
            <i className="mdi mdi-share-variant" />
          </div>
        </div>
      </Card>
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
    </div>
  );
}

export default Events;
