
import './App.css'
import LiveChart from './assets/components/LiveChart/LiveChart'
import Navbar from './assets/components/Navbar/Navbar'
import PriceOptions from './assets/components/Price Options/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LiveChart></LiveChart>
    </>
  )
}

export default App
