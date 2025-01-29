import { useState , useCallback , useEffect , useRef } from 'react'


function App() {
  const [length , setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacter] = useState(false);
  const [password , setPassword] =useState(" ");

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback( () => {
    let pass ="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    if(number) str += "0123456789";
    if(characters) str += "!@#$%^&*()_+=-[]{}|;':\",.<>/?";

    for(let i=1; i<= length ; i++){
      let char= Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length , number, characters, setPassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },
  [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length , number, characters , setPassword]);

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-2xl text-center text-white py-5"> Password Generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full px-3 py-2 rounded-lg" 
          placeholder='password' 
          readOnly
          ref={passwordRef}
          />

          <button 
          className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-lg"
          onClick={copyPasswordtoClipboard}
           >copy</button>
          
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value);}}
            />
            <label>Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={(e) => {setNumber((prev)=>!prev);}}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characters}
            id='characterInput'
            onChange={(e) => {setCharacter((prev)=>!prev);}}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
