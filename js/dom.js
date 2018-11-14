// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener //our edit
        // add span holding description

        var des=document.createElement('SPAN');
        des.innerText=todo.description;
        todoNode.appendChild(des);
       //end
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      console.log(todo.id)
      var newState = todoFunctions.deleteTodo(state, todo.id);
      console.log(newState);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    //our edit
    var markNode = document.createElement('button');
    markNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markNode);
     //end
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
   addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();




    var description = event.target.description.value; // event.target ....
   console.log(description)
  //our edit
  // end
    // hint: todoFunctions.addTodo
    var newState=todoFunctions.addTodo(state, description); // ?? change this!
    update(newState);

  })
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
     //our edit
      // what is inside event.target?

  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
