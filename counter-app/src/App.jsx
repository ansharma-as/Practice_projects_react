import { useMemo, useState } from "react";

function App(){
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(1);

    let count = useMemo(() =>{
        console.log("Memo is called");
        let finalcount=0;
    for(let i=0; i<= value ; i++){
        finalcount= finalcount+i;
    }
    return finalcount;

    },[value]);
    
    
    return(
        <div>
            <input onChange={function(e){
                setValue(e.target.value);
            }}
                placeholder = {"find sum 1 to n"}
             />
             <br />
             sum from 1 to {value} is {count}
             <br />

             <button onClick={() => {
                 setCounter(counter + 1);
             }}>Counter ({counter})</button>
        </div>
    )
}

export default App