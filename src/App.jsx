import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CreatePhone from './components/CreatePhone';
import UpdatePhone from './components/UpdatePhone';
import DetailPhone from './components/DetailPhone';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePhone/>}/>
        <Route path='/update/:id' element={<UpdatePhone/>}/>
        <Route path='detail/:id' element={<DetailPhone/>}/>
      </Routes>
    </>
  )
}

export default App;