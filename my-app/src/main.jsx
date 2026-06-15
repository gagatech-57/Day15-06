import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Count from './App.jsx'
import Child from './Main/Chlid.jsx'
import Parend from './Main/Parend.jsx'
import CreateUsers from './User.jsx'
import GetUsers from './GetUser.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
    <Parend />
    <CreateUsers />
    <GetUsers />

  </StrictMode>,
)
