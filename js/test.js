var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('test for adding new todo', function(t) {

  t.deepEqual(logic.addTodo([], 'new todo'),[{id: 1,description: 'new todo', done: false}],"new todo has been added!");
  t.end();
});

test('test for deleting a todo', function(t) {

  t.deepEqual(logic.deleteTodo([{id: 1, description: 'first todo', done:false}], 1),[],"a todo has been deleted!");
  t.end();
});

test('test for marking a todo', function(t) {

  t.deepEqual(logic.markTodo([{id: 0, description: 'first todo', done: false}], 0),
  [{id: 0, description: 'first todo', done: true}],"a todo has been marked!");
  t.deepEqual(logic.markTodo([{id: 1, description: 'first todo', done: true}], 1),
  [{id: 1, description: 'first todo', done: false}],"a todo has been unmarked!");
  t.end();
});
