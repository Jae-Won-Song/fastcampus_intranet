import { useState } from 'react'
import './App.css'

import FormTitle from './pages/ApplyFormPage';
import ApplyList from './pages/ApplyListPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <FormTitle/> */}
    <ApplyList/>
    </>
  )
}

export default App
