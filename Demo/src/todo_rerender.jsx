import React, { useState, memo } from 'react';



function App() {
   const [title, setTitle] = useState("My name is Strontium")
  function updateTitle(title) {
    setTitle("My name is " + Math.random().toString(36));
    }
  return (
    <div>
      {/* <HeaderwithButton/> */}
      
      <button onClick = {updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title={title}></Header>


      <Header title="Stron2"></Header>
      <Header title="Stron3"></Header>
      <Header title="Stron4"></Header>
    </div>
  )
  
}

// function HeaderwithButton(){
//   const [title , setTitle] = useState("My name is Strontium")

    // function updateTitle(title) {
    //   setTitle("My name is " + Math.random().toString(36));
    //   }

//     return (
//       <>
//       <button onClick={updateTitle} > Click to update title </button>
//       <Header title={title}></Header>
//       <Header title="Stron2"></Header>
//       <Header title="Stron3"></Header>
//       <Header title="Stron4"></Header>
    

        
//       </>
//     )
//   }

// function Header({title}){
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

const Header = React.memo(function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
})

export default App
