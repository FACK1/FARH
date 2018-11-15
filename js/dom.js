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
    if(todo.done===true){
      todoNode.classList.add("mark")
    }else {
      todoNode.classList.add("unmark");
    }

    // you will need to use addEventListener //our edit
        // add span holding description

    var des=document.createElement('SPAN');
    des.innerText=todo.description;
    todoNode.appendChild(des);
       //end
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute('class', 'deleteButton');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    //our edit
    var markNode = document.createElement('button');
    markNode.setAttribute('class', 'markButton');
    markNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markNode);
     //end
    // add classes for css

    document.getElementById('sort1').addEventListener('click',function(event) {
      var newState = todoFunctions.sortTodos(state, 1);
      update(newState);
    });

    document.getElementById('sort2').addEventListener('click',function(event) {
      var newState = todoFunctions.sortTodos(state, 2);
      update(newState);
    });

    return todoNode;
  };

  // bind create todo form
  //step 1: get the text input from the text field if the button has been clicked
  if (addTodoForm) {
   addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
    var description = event.target.description.value; //assign the text input to a variable
   // add new todo to a new array
    var newState=todoFunctions.addTodo(state, description);
    update(newState);
    document.getElementsByName("description")[0].value = '';
})
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
