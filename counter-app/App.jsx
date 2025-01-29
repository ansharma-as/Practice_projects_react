import React from 'react'

function App(){
    const [count , setCount]= React.useState(0);

    return (
        <div>
            <button count={count} setCount={setCount}></button>

        </div>
    )
    function Button(props){
        function onButtonclick(){
            props.setCount(props.count+1);
        }
        return <button onClick={onButtonclick}>Counter{props.count}</button>
    }
    
}
export default App