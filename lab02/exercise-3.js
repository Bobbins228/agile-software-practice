fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json
     const filtered = uncompleted.filter(todo => todo.userId != null && todo.completed === false).map( todo => {
        return {
            userId: todo.userId,
            title: todo.title
        }
     });
     console.log(filtered)
  })
  .catch(function(err) { 
    console.log(err);
  });