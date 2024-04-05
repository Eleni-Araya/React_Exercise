import { useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'


// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jay Zhou',
    },
    // comment content
    content: 'Nice, well done',
    // created datetime
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    ctime: '10-19 09:00',
    like: 66,
  },
  {
    rpid: 4,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'Follow Me',
    ctime: '10-18 09:00',
    like: 77,
  }
]
// current logged in user info
const user = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'John',
}



// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

const App = () => {

  const [commentList, setCommentList] = useState(defaultList);

  const deleteComment = (rpid: number) => {
    setCommentList(commentList.filter(item => item.rpid !== rpid));
  }

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span className='nav-item'>Top</span>
            <span className='nav-item'>Newest</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map(item => {
            const {rpid, user, content, like, ctime} = item;
            return (
              <div className="reply-item" key={rpid}>
                {/* profile */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                      className="bili-avatar-img"
                      alt=""
                    />
                  </div>
                </div>
  
                <div className="content-wrap">
                  {/* username */}
                  <div className="user-info">
                    <div className="user-name">{user.uname}</div>
                  </div>
                  {/* comment content */}
                  <div className="root-reply">
                    <span className="reply-content">{content}</span>
                    <div className="reply-info">
                      {/* comment created time */}
                      <span className="reply-time">{ctime}</span>
                      {/* total likes */}
                      <span className="reply-time">Like:{like}</span>
  
                      {
                        user.uid === user.uid && (
                          <span className="delete-btn" onClick={() => deleteComment(item.rpid)}>
                            Delete
                          </span>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default App