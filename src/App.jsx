import {useState} from 'react'
import { createContext, useContext } from 'react'
import './App.css'
import Form from './Form'
import { ClassesContext } from './ClassesContext'

function App() {

  const [classes, setClasses] = useState(null)
  const [tutorialHours, setTutorialHours] = useState(null)
  const [totWeeklyClass, setTotWeeklyClass] = useState(null)
  const [totalSemClasses, setTotalSemClasses] = useState(null)
  const [skipNum, setSkipNum] = useState(null)

return (
    <ClassesContext.Provider 
    value={
      {classes, 
      setClasses,
      tutorialHours,
      setTutorialHours,
      totWeeklyClass,
      setTotWeeklyClass,
      totalSemClasses,
      setTotalSemClasses,
      skipNum,
      setSkipNum
      }    
    }>
    <Form/>
    </ClassesContext.Provider>
  )
}

export default App
