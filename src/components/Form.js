import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) =>{
            //인풋내용, 버특 클릭 시 함수, ,키를 입력할 때 실행 함수
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;