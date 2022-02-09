import React, { ReactElement, useLayoutEffect, useState } from 'react';

function App(): ReactElement {
  const URL: string = 'https://jsonplaceholder.typicode.com/todos';

  const [todos, setTodos] = useState<any>();

  async function fectchApi() {
    const response: Response = await fetch(URL);
    const responseJSON: JSON = await response.json();
    setTodos(responseJSON);
  };
  useLayoutEffect(() => {
    fectchApi();
  }, []);

  return (
    <div className="App">
      Hola Mundo
      <ul>
        { 
          !todos ? 'Cargando...' :
            todos.map((todo: any, index: number): ReactElement => {
              return (
                <li key={index}>
                  <h2>{todo.title}</h2>
                  <p>es el todo numero { index + 1 }</p>
                  <p>
                    { 
                      todo.completed ? "El todo fue completado" :
                                        "El todo no fue completado" 
                    }
                  </p>
                </li>
              );
            })
        }
      </ul>
    </div>
  );
}

export default App;
