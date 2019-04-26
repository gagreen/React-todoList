import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const {text, checked, id, color, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={()=> onToggle(id)}>
                {/*onClick={onToggle(id)라고 하면 렌더링할 떄 실행됨(무한반복)*/}
                <div className="remove" onClick={(e) =>{
                    e.stopPropagation(); //현재 이벤트 이후 전파를 막음(from.MDN)
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;