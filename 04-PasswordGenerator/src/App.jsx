import "./app.css";
import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("Copy");

  // PASSWORD GENERATOR FUNCTION

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "013456789";
    }
    if (charAllowed) {
      str += "!@#&(){}";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
    setBtnText("Copy");
  }, [length, numAllowed, charAllowed, setPassword, setBtnText]);

  // USEEFFECT HOOK
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword, setBtnText]);

  // useRef for copy password
  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied");
    passwordRef.current?.select();
  }, [password]);

  return (
    <>
      <p className="text-4xl text-center text-white ">
        This is Password Generator project.
      </p>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-5  px-4 py-2 text-orange-300 bg-gray-600">
        <h5 className="my-3 text-violet-300">Please generate your password</h5>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg "
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="rounded-lg py-3 px-3 text-green-300 mx-4"
            onClick={copyToClipBoard}>
            {btnText}
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
