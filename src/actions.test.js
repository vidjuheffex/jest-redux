import reducer from "./reducer";

import {CREATE_TODO, TOGGLE_TODO, FILTER_TODOS, createTodo, toggleTodo, filterTodos} from './actions.js';

describe("CREATE_TODO_ACTION", function(){
  test("dispatch a create todo action", function(){
    expect(createTodo("Test")).toHaveProperty("type", CREATE_TODO);
  });
});

describe("TOGGLE_TODO_ACTION", function(){
  test("dispatch a toggle todo action", function(){
    expect(toggleTodo("Test")).toHaveProperty("type", TOGGLE_TODO);
  });
});

describe("FITLER_TODO_ACTION", function(){
  test("dispatch a filter todo action", function(){
    expect(filterTodos("Test")).toHaveProperty("type", FILTER_TODOS);
  });
});
