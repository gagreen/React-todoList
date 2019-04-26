import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    shouldComponentUpdate(nextProps, nextState){ // 리렌더링 할지 말지 정하는 메서드, 업데이트에 영향을 끼치는 조건을 return하면 된다.
        return this.props !== nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props;
        //객체들의 배열, 체크박스, 아이템삭제
        const todoList = todos.map(
            (todos) =>(
                <TodoItem
                    {...todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todos.id}
                />
            )
        );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;