import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [lenghOfpassword, setLenghOfpassword] = useState(5);
  const [stcheckBigletter, setstCheckBigletter] = useState(false);
  const [stNumbers, setstNumbers] = useState(false);
  const [setstspecialCharacter, setSetstspecialCharacter] = useState(false);
  const handleLengthchange = (e) => {
    setLenghOfpassword(e.target.value)
  }
  const checkBigletter = () => {
    setstCheckBigletter(!stcheckBigletter)
  }
  const checkNumbers = () => {
    setstNumbers(!stNumbers)
  }

  const checkSpecialcharacter = () => {
    setSetstspecialCharacter(!setstspecialCharacter)
  }

  const generatePassword = () => {
    if (stcheckBigletter) {
      generationString = generationString + bigLetters;
    }
    if (stNumbers) {
      generationString = generationString + numbers
    }
    if (setstspecialCharacter) {
      generationString = generationString + spcChar
    }
    let passcode = ""
    for (let i = 0; i < lenghOfpassword; i++) {

      passcode = passcode + generationString.charAt(Math.floor(Math.random() * generationString.length))
    }
    setPassword(passcode)
  }

  let generationString = "abcdefghijklmnopqrstuvwxyz"
  let bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "1234567890"
  let spcChar = "{}:><.,()!@#$%^&*]["

  return (
    <>
      <div className="w-screen bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex items-center justify-center ">
        <div className="bg-gray-300 w-2/3 h-2/3 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-slate-800">
          <span className='self-start'>
            <img src="logo.png" alt="logo" className='w-9 h-9 rounded-2xl  ml-2' />
          </span>
          <h1 className='font-bold'>Password Generator</h1>
          <input className='items-center my-2 rounded-xl text-center' type="text" value={password} readOnly />
          <br />
          <div className="">
            <label htmlFor="capitalLetters"> Capital Letters</label>
            <input className='ml-2' name="capitalLetters" type="checkbox" checked={stcheckBigletter} onChange={checkBigletter} />
          </div>
          <div className="">
            <label htmlFor="Numbers">Numbers</label>
            <input className='ml-2' name="Numbers" type="checkbox" checked={stNumbers} onChange={checkNumbers} />
          </div>
          <div className="">
            <label htmlFor="spccharacter">special Characters</label>
            <input className='ml-2' name="spccharacter" type="checkbox" checked={setstspecialCharacter} onChange={checkSpecialcharacter} />
          </div>
          <div className="">
            <label htmlFor="range">Length : </label>
            {
              lenghOfpassword
            }
            <input className='ml-2' type="range" name="range" id="00" max={12} min={5} value={lenghOfpassword} onChange={handleLengthchange} />
          </div>
          <button className='bg-green-300 p-1 rounded-lg' onClick={generatePassword}>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
