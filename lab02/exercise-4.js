fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json
     const filtered = completed.filter(todo => todo.userId != null && todo.completed === true).reduce( (total, todo, index, array) => {
        return total + 1
        
     },0);
     console.log(filtered)
  })
  .catch(function(err) { 
    console.log(err);
  });