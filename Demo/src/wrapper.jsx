import React from 'react';

function App(){
    return <div>
    <CardWrapper innerComponent ={ <TextComponent/> }/>
    </div>
}

function TextComponent(){
    return <div>
        hi there!
    </div>
}

function CardWrapper({innerComponent}){
    //create a div which has border 
    // and inside a div renrenders the prop\
    return <div style={{ border: '2px solid black' }}>
        {innerComponent}

    </div>
}

export default App;