import React, { useEffect, useRef, useState } from 'react'

function FormRef() {

  const inputRef = useRef() //{current: undefined}
  console.log(inputRef)

  useEffect(() => {
    // const inputEle = document.getElementById('searchText')
    // console.log(inputEle)
    // inputEle.setAttribute('style', 'background-color: yellow')

    console.log(inputRef)
    inputRef.current.setAttribute('style', 'background-color: yellow')

  }, [])

  // const [signInCount, setSignInCount] = useState(0)

  console.log("Component Rendered")

  const signInCount = useRef(0) //{current: 0}
  return (
    <div>
      <label>Search:</label>
      <input type='text' id='searchText' placeholder='Search...' ref={inputRef} />
      <button onClick={() => {
        console.log(signInCount.current)
        // setSignInCount(signInCount + 1)

        //Changing ref current value will never rerender a component
        signInCount.current = signInCount.current + 1;
      }
      }>Sign In</button>
    </div>
  )
}

export default FormRef

// What's the output?

// function getInfo(member, year) {

//   member.name = 'Lydia';

//   year = '1998';

// }

// const person = { name: 'Lydia' };
// const birthYear = '1997';


// getInfo(person, birthYear);

// console.log(person, birthYear); {name: 'Lydia'}, 1997

// //Pass by value - apart from objects
// //Pass by reference - objects