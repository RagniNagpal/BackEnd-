//how to insert element 
//1. create new element using create element function
//2. insert require data in that element using innerText or innerHTML
//3. Insert new element in parent container using appendChild or append

let todos = [
      { id: 1, title: "Complete work" },
      { id: 2, title: "Go for walk" },
      { id: 3, title: "Study JavaScript" },
      { id: 4, title: "Read a book" }
    ];

    let todocontainer = document.querySelector(".todocontainer");

    
    function addTodo(todo) {
      let li = document.createElement("li");
      li.innerHTML = `
        <div>
          <input type="checkbox" />
          <h1>${todo.title}</h1>
          <div>
            <button>❌</button>
            <button>✏️</button>
          </div>
        </div>`;
      todocontainer.appendChild(li);
    }


    todos.forEach(addTodo);