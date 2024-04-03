import { useState, useCallback , useEffect , useRef} from "react";

import "./App.css";

function App() {
  const [length, setLentgh] = useState(8);
  const [numValue, setNumValue] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useRef Hook


  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if (numValue) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_=[]()~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numValue, charAllowed, setPassword]);
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } , [password])

 useEffect(()=>{
    passwordGenerator()
 } , [length , numValue , charAllowed , passwordGenerator])
  return (
    <div className="bg-slate-600 text-center h-[100vh] flex justify-center items-center">
      <div>
        <h1 className="text-white uppercase text-5xl">PassWord</h1>
        <div className="w-full h-8 max-w-md mx-auto  rounded-lg px-4 my-8 text-orange-500">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-5 px-5"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button className="px-4 text-white bg-orange-500" onClick={copyPasswordToClipBoard}> Copy </button>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              name=""
              id=""
              className="cursor-pointer"
              onChange={(e) => {
                setLentgh(e.target.value);
              }}
            />
            <label>Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
             defaultChecked={numValue}
              name=""
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumValue((prev)=> !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
             defaultChecked={charAllowed}
              name=""
              id="charactInput"
              className="cursor-pointer"
              onChange={() => {
                setcharAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="charactInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
