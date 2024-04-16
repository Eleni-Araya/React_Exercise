import Item from "../Item"
import Todo from "../../types"

import './index.css'

type Props = {
  todos: Todo[]
}

export default function List(props: Props) {
  const { todos } = props;
  return (
    <ul className="todo-main">
      {todos.map(todo => <Item key={todo.id} {...todo} />)}
    </ul>
  )
}