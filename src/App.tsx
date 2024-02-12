import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './User'
import { Comments } from './Comments'
import { Logo } from './Logo'
import { Title } from './Title'
import { Lorem } from './Lorem'
import { Comment } from './Comment'



function App() {
  

  return (
    <>
      <Logo />
      <Title />
      <Lorem />
      <Comment />
      <Comments />
    </>
  )
}

export default App
