import React from 'react'

type MainGame = {
  children: any;
}


const WrapperGame = ({ children }: MainGame) => {
  return (
    <div>
      {/* Header */}
      <h1>hello ae nhaa !!!!</h1>
        {children}
        {/* Sidebar */}
    </div>
  )
}

export default WrapperGame