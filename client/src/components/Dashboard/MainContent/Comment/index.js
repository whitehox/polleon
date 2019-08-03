import React from 'react';

function Comment() {
  return (
    <div className="commentSection" style={{ transition: 'all linear .2s' }}>
      <div className="commentsDisplay">
        <ul className="commentList">
          <li className="commentItem">
            <div className="postHeader">
              <img alt="avatar" src="/assets/img/author-page.jpg" />
              <div className="authorDetails">
                <a href="/">Tega Oke</a>
                <br />
                <time>1 hour ago</time>
              </div>
              <div className="eventDropArea">
                <nav>
                  <i className="mdi mdi-dots-horizontal" />
                </nav>
              </div>
            </div>
            <p className="eventDes">
              Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam
              est, quinder dolorem ipsum quia dolor sit amet, consectetur
              adipisci velit en lorem ipsum duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </li>
        </ul>
      </div>
      <div className="commentForm">
        <form>
          <textarea name="comment" id="comment" />
          <button className="btn-primary" type="submti" name="postComment">
            Post Comment
          </button>
          <button type="submit" name="cancleComment">
            Cancle
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
