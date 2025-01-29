import { useState, useEffect } from "react";
export default function App(){
    return <div>
        < Todo id={1} />

    </div>
}

function Todo ({id}){
    const [todo, setTodo] = useState({});

    useEffect( () => {
        fetch(`mongodb://localhost:27017/Todo-Application/todos/${todo.id}`)
        .then(async (res) => {
            const json = await res.json();
            setTodos(json.todos)

        },[]);
    })

    return(
        <div>
            <h1>{todo.title}
            </h1>

            <h3>{todo.description}</h3>
        </div>
    )
}