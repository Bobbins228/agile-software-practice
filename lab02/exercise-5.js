fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json
     const filtered = uncompleted.reduce((total, todo, index, array) => {
         if (todo.completed == false) {
             total.push({userId: todo.userId, title: todo.title})
         }
         return total
     }, [])
     console.log(filtered)
  })
  .catch(function(err) { 
    console.log(err);
  });