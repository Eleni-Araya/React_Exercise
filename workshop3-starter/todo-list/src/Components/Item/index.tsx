import Todo from '../../types'
import './index.css'

interface ItemProps {
    id: string,
    name: string,
    done: boolean,
    onUpdateTodo: (id: string) => void;
    onDeleteBtn: (id: string) => void
}

export default function Item(props: ItemProps) {
    const { id, name, done, onUpdateTodo, onDeleteBtn } = props

    const onChnageCheckbox = () => {
        onUpdateTodo(id);
    };

    const onDeleteItem = () => {
        if (window.confirm('Are you sure?')) {
            onDeleteBtn(id)
        }
    }
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={onChnageCheckbox}
                />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={onDeleteItem} >
                Delete
            </button>
        </li>
    )
}
