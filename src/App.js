import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3;
  state = {
    input:'',
    todos: [
      {id:0, text: 'REACT', checked: false},
      {id:1, text: '리액트', checked: true},
      {id:2, text: 'react', checked: false}
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  
  handleCreate = () =>{
    const {input, todos, color} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ //배열 추가 메서드 concat
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id); // id를 이용해 몇번째 아이템인지 찾는다.
    const selected = todos[index];
    const nextTodos = [...todos]; // 배열 복사

    nextTodos[index] = { // 다른 것 덮어쓰기, checked값 덮어쓰기
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id) // id가 아닌 것만 넣기
    })
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const {input, todos, color} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
          color= {color}
        />
      )} palette={(<Palette colors={colors} selected={color} onSelect={handleSelectColor}/>)}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
