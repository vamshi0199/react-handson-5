import Header from './Components/Header';
import Student from './Components/Student';
import Home from './Components/Home '
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Studentprovide} from './Components/Info2'
import Info from './Components/Info'
function App() {
  return (
    
    <div className="App">
      <Studentprovide>
     <Router>
       <Header/>
       <Routes>
         <Route path='/Home' element={<Home/>} />
         <Route path ='/Student' element ={<Student/>} />
         <Route path='/info' element={<Info/>}>
         <Route path=':id' element={<Info/>}></Route>
         </Route>
       </Routes>
     </Router>
     </Studentprovide>
    </div>
  );
}

export default App;
