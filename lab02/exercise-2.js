fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => { 
     const todos = json 
     const titles = todos.map( todo => {
         return {
             title: todo.title
         }
    })
    console.log(titles)
  })
  .catch(function(err) { 
    console.log(err);
  });
