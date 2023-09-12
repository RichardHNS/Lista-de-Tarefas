import React from "react";
import { useState } from "react";
import {
  Button,
  Button2,
  Container,
  Corpo,
  H1,
  Input,
  Item,
  Ul,
} from "./style";

function App() {
  //Estados
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState();

  //Funções

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function buttonClick() {
    setTasks([...tasks, inputValue]);
  }
  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <Container className="backDiv">
      <Corpo>
        <H1>Lista de Tarefas</H1>
        <Input
          placeholder="Digite Sua Tarefa"
          type="text"
          onChange={inputChange}
        />
        <Button onClick={buttonClick}>Adicionar</Button>

        <Ul>
          {tasks.map((item, index) => (
            <Item key={index}>
              {" "}
              {item} <Button2 onClick={() => removeTask(index)}>x</Button2>
            </Item>
          ))}
        </Ul>
      </Corpo>
    </Container>
  );
}

export default App;
