import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="프론트엔드 프로젝트 만들기"></TodoItem>
            <TodoItem text="피파하기" done={true}></TodoItem>
            <TodoItem text="운동하기"></TodoItem>
            <TodoItem text="카톡하기" done={true}></TodoItem>
        </TodoListBlock>
    );
}
export default TodoList;
