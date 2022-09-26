fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const titles = []; 
     const todos = json // Complete this code
     todos.forEach( (todo, index) => {
        titles.push(todo.title)
    })
    console.log(titles)
  })
  .catch(function(err) { 
    console.log(err);
  });
