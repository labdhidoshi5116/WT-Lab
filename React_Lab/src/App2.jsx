import { useState } from 'react'
//import './App2.css'
function ProfileCard(props) {
    const {name, age,isDisplay} = props
  return (
    <div>
        {isDisplay ? (
            <div>
            <h2>Name:{name}</h2>
            <h3>age: {age}</h3>
            </div>
        ) :
        (
          <h3>Proflie is hidden</h3>
        )}
    </div>
  )
}
function App2() {
  function handleClick(){
    alert('Mouse Event Triggered')
  }
  return(
    <div style={{textAlign: 'center'}}>
      <u><h1>ReactJS Props + Event Handling + Conditional Rendering</h1></u>
      <ProfileCard name="John Doe" age={23} isDisplay={true} />
      <ProfileCard name="Jane Doe" age={30} isDisplay={false} />
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
      <button onDoubleClick={handleClick}>Double Click</button>
      <br />
      <br />
      <button onMouseOut={handleClick}>Mouse Out</button>
      <br />
      <br />
      <button onMouseEnter={handleClick}>Mouse Enter</button>
      <br />
      <br />
      <button onMouseLeave={handleClick}>Mouse Leave</button>
    </div>
  )
}
export default App2