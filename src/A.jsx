import React from 'react'

function A(){
    const msg="A string is here"
  return (
    <div>
        <B msg={msg}/>
    </div>
  )
}

function B(prop){
  return (
    <div>
        <C msg={prop.msg}/>
    </div>
  )
}

function C(prop){
  return (
    <div>
        <D msg={prop.msg}/>
    </div>
  )
}

function D(prop){
  return (
    <div>
        <E msg={prop.msg}/>
    </div>
  )
}

function E(prop){
  return (
    <div>
        <F msg={prop.msg}/>
    </div>
  )
}

function F(prop){
  return (
    <div>
       <h1>{prop.msg}</h1>
    </div>
  )
}



export default A
