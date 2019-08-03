import React from 'react';

function Likes({ commentsHandler }) {
  return (
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
        <a href="/">Jenny</a>, <a href="/">Robert</a> and
        <br />
        18 more liked this
      </div>
      <p>100+ votes</p>
      <div className="eventAction">
        <i className="mdi mdi-comment-outline" onClick={commentsHandler} />
        <i className="mdi mdi-share-variant" />
      </div>
    </div>
  );
}

export default Likes;
