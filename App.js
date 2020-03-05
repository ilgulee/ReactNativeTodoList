import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Heading from "./src/components/Heading";
import Input from "./src/components/Input";
import SubmitButton from "./src/components/SubmitButton";
import TodoList from "./src/components/TodoList";


let todoIndex = 0;
class App extends Component {
  state = {
    inputValue: "",
    todos: [],
    type: "All"
  };

  setInput = input => {
    this.setState({ inputValue: input });
  };

  addTodo = () => {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({ inputValue: "", todos }, () => {
      console.log(this.state.todos);
    });
  };

  deleteTodo = todoIndex => {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  };

  toggleComplete = todoIndex => {
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  };

  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            onSubmit={() => this.addTodo()}
            inputValue={inputValue}
            onTextInput={input => this.setInput(input)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <SubmitButton onSubmit={() => this.addTodo()} />
        </ScrollView>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});
