
(function() {
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ];

  var createTodoNode = function(todo) {
  var todoNode = document.createElement('li');
    if(todo.done===true){
      todoNode.classList.add("mark")
    }
  var des=document.createElement('SPAN');
    des.innerText=todo.description;
    todoNode.appendChild(des);

    // this adds the delete button
  var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
  var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
  var markNode = document.createElement('button');
    markNode.addEventListener('click', function(event) {
  var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markNode);
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
   addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
    var description = event.target.description.value;
    var newState=todoFunctions.addTodo(state, description);
    update(newState);
  })
  }
  
  var update = function(newState) {
    state = newState;
    renderState(state);
  };
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    container.replaceChild(todoListNode, container.firstChild);
  };
  if (container) renderState(state);
})();
