import React, { createContext, useState } from "react";
import ChildA from "./ChildA";
import '../App.css'

//1
export const UserContext = createContext()
function App() {

  const [userName, setUserName] = useState('Hashma')
  const [isLogged, setIsLogged] = useState(false)


  const contextObj = {
    userName,
    isLogged
  }
  return (
    <div className="app">
      App
      {/* 2 */}
      <UserContext.Provider value={contextObj}>
        <ChildA />
      </UserContext.Provider>
      <button onClick={() => setIsLogged(!isLogged)}>Log In/Out</button>
    </div>
  )
}

export default App;