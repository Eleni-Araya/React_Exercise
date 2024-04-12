import './App.scss'
import avatar from './images/bozai.png'
import { useRef, useState } from 'react'
import React from 'react'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

interface Comment {
  rpid: number | string,
  user: {
    uid: string,
    avatar: string,
    uname: string
  }
  content: string,
  ctime: string,
  like: number
}

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
      uid: '3608015',
      avatar: '',
      uname: 'eleni Araya',
    },
    content: 'I search for you .',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 5,
    user: {
      uid: '3608015',
      avatar: '',
      uname: 'eleni Araya',
    },
    content: 'Hello react.',
    ctime: '11-13 11:29',
    like: 88,
  }
]
// current logged in user info
const user = {

  uid: '3608015',
  avatar: '',
  uname: 'eleni Araya',

}

// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

interface PropsReplyType {
  commentList: Comment[],
  onDeleteComment: (rpid: number | string) => void

}

function Reply_Item(props: PropsReplyType) {
  const { commentList, onDeleteComment } = props
  return (
    <div>
      {commentList.map(item =>
        <div className="reply-item" key={item.rpid}>
          <div className="root-reply-avatar">
            <div className="bili-avatar">
              <img
                className="bili-avatar-img"
                alt=""
              />
            </div>
          </div>
          <div className="content-wrap">
            <div className="user-info">
              <div className="user-name">{item.user.uname}</div>
            </div>
            <div className="root-reply">
              <span className="reply-content">{item.content}</span>
              <div className="reply-info">
                <span className="reply-time">{item.ctime}</span>
                <span className="reply-time">Like:{item.like}</span>
                {item.user.uid === user.uid && (
                  <span className="delete-btn" onClick={() => onDeleteComment(item.rpid)}>
                    Delete
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div >)
}

const App = () => {

  const [commentList, setCommentList] = useState<Comment[]>(_.orderBy(defaultList, 'like', 'desc'));
  const [activeType, setActiveType] = useState('hot')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const deleteComment = (rpid: number | string) => {
    setCommentList(commentList.filter(comment => comment.rpid !== rpid))
  }

  const changeActiveType = (type: string) => {
    setActiveType(type);

    if (type === 'hot') {
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }

  const makePost = () => {
    const newComment = {
      rpid: uuidv4(),
      user,
      content: textareaRef.current!.value,
      ctime: dayjs(Date.now()).format('MM-DD HH:mm'),
      like: 0
    }
    setCommentList([...commentList, newComment])
    textareaRef.current!.value = '';
    textareaRef.current!.focus()
  }
  return (<div className="app">
    {/* Nav Tab */}
    <div className="reply-navigation">
      <ul className="nav-bar">
        <li className="nav-title">
          <span className="nav-title-text">Comments</span>
          {/* Like */}
          <span className="total-reply">{10}</span>
        </li>
        <li className="nav-sort" >
          {/* highlight class name： active ****Tab mapped below*/}
          {
            tabs.map(tab => {
              let classnames = '';
              if (tab.type === activeType) {
                classnames = 'nav-item active'
              } else {
                classnames = 'nav-item'
              }
              return (<span key={tab.type}
                className={classnames}
                onClick={() => changeActiveType(tab.type)}>
                {tab.text}
              </span>);
            }
            )
          }
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
          {/* comment ***********Ref added*/}
          <textarea ref={textareaRef}
            className="reply-box-textarea"
            placeholder="tell something..."
          />
          {/* post button */}
          <div className="reply-box-send" onClick={makePost}>
            <div className="send-text" >post</div>
          </div>
        </div>
      </div>
      {/* comment list */}
      <div className="reply-list">
        {/* comment item */}
        {commentList.map(item =>

          <div className="reply-item" key={item.rpid}>
            <Reply_Item commentList={commentList} onDeleteComment={deleteComment} />
          </div>
          // {/* profile */}
        )}
      </div>
    </div>
  </div>)

}
export default App