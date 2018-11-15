var todoFunctions = {
  
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),


  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {

    var updatedArray = todoFunctions.cloneArrayOfObjects(todos);
    return updatedArray.concat({id: todoFunctions.generateId(), description: newTodo, done: false});
  },
  deleteTodo: function(todos, idToDelete) {

    var updatedArray = todoFunctions.cloneArrayOfObjects(todos);
    return updatedArray.filter(element =>  element.id !== idToDelete);
  },
  markTodo: function(todos, idToMark) {

    var updatedArray = todoFunctions.cloneArrayOfObjects(todos);
    return updatedArray.map(function(element)
    {if(element.id === idToMark){ element.done = !element.done}
    return element});
  },
  sortTodos: function(todos, sortFunction) {

    var updatedArray = todoFunctions.cloneArrayOfObjects(todos);
    var undone = [];
    var done = [];
    updatedArray.map(function(todo){
   if(todo.done === true)
    done.push(todo);
    else{
    undone.push(todo);
    }
   })

if(sortFunction === 1){
 return [...done, ...undone];
}
else{
 return [...undone, ...done]
}

  },
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
