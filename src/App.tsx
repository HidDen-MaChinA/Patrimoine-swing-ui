import './App.css'
import Chart from './components/Chart'
import Panel from './components/Panel'

function App() {
  return (
    <div className='flex flex-row gap-2 w-full'>
      <Panel />
      <Chart />
    </div>
  )
}

export default App
