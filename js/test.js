var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('test for adding new todo', function(t) {
  var actual=logic.addTodo([], 'new todo');
  var expected=[{id: 1,description: 'new todo', done: false}];
  t.deepEqual(actual,expected,"new todo has been added!");
  t.end();
});

test('test for deleting a todo', function(t) {
  var actual =logic.deleteTodo([{id: 1, description: 'first todo', done:false},{id: 2, description: 'first todo', done:false}], 1) ;
  var expected=[{id: 2, description: 'first todo', done:false}];
  t.deepEqual(actual,expected,"a todo has been deleted!");
  t.end();
});

test('test for marking a todo', function(t) {
  var actual =logic.markTodo([{id: 0, description: 'first todo', done: false}], 0);
  var expected=[{id: 0, description: 'first todo', done: true}] ;
  var actual1=logic.markTodo([{id: 1, description: 'first todo', done: true}], 1);
  var expected1 =[{id: 1, description: 'first todo', done: false}];
  var actual2=logic.markTodo([{id: 1, description: 'first todo'}], 1);
  var expected2=[{id: 1, description: 'first todo', done: true}];
  t.deepEqual(actual,expected,"a todo has been marked!");
  t.deepEqual(actual1,expected1,"a todo has been unmarked!");
  t.deepEqual(actual2,expected2,"a todo without a done property has been marked!");
  t.end();
});

test('test for sorting todos', function(t) {

var a = [
 {id: 0, description: 'first todo', done: false},
 {id: 1, description: 'second todo', done: true},
 {id: 2, description: 'third todo', done: false}
];

var actual1 = logic.sortTodos(a, 1);
var actual2 = logic.sortTodos(a, 2);

var expected1 = [
 {id: 1, description: 'second todo', done: true},
 {id: 0, description: 'first todo', done: false},
 {id: 2, description: 'third todo', done: false}
];

var expected2 = [
 {id: 0, description: 'first todo', done: false},
 {id: 2, description: 'third todo', done: false},
 {id: 1, description: 'second todo', done: true}
];

  t.deepEqual(actual1, expected1, "if done listed at top then true!")
  t.deepEqual(actual2, expected2, "if done listed at bottom then true!")
  t.end();
});
