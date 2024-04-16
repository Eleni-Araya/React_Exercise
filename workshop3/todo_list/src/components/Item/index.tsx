import Todo from '../../types'

import './index.css';


export default function Item(props: Todo) {
  const { id, name, done } = props;

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
    </li>
  )
}