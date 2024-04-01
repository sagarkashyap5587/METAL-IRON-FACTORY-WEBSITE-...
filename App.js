import logo from './logo.svg';
import './App.css';
import First from './Component/First';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpiralStaircase from './Component/SpiralStaircase';
import StraightStair from './Component/StraightStair';
import HelicalStaircase from './Component/HelicalStaircase';
import ZigZagStair from './Component/ZigZagStair';
import Modern from './Component/Modern';
import FascadedesignBlocks from './Component/FascadedesignBlocks';
import FascadedesignPipe from './Component/FascadedesignPipe';
import FascadedesignHome from './Component/FascadedesignHome';
import WallSolidBar from './Component/WallSolidBar';
import WallDesign from './Component/WallDesign';
import Pergola from './Component/Pergola';
import EnquireNow from './Component/EnquireNow';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<First/>} />
      <Route exact path='/spiralstaircase' element={<SpiralStaircase/>}/>
      <Route exact path='/straightstair' element={<StraightStair/>}/>
      <Route exact path='/helicalstair' element={<HelicalStaircase/>}/>
      <Route exact path='/zigzag' element={<ZigZagStair/>}/>
      <Route exact path='/modernstair' element={<Modern/>}/>
      <Route exact path='/block' element={<FascadedesignBlocks/>}/>
      <Route exact path='/pipe' element={<FascadedesignPipe/>}/>
      <Route exact path='/fascadehomedesign' element={<FascadedesignHome/>}/>
      <Route exact path='/solidbar' element={<WallSolidBar/>}/>
      <Route exact path='/walldesign' element={<WallDesign/>}/>
      <Route exact path='/pergola' element={<Pergola/>}/>
      <Route exact path='/enquirenow' element={<EnquireNow/>}/>
    </Routes>

    </BrowserRouter>
   
   </>
  );
}

export default App;
