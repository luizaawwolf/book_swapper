// It is the main component of our app. It uses BrowserRouter to link all our different pages and give them paths and components to load for that page.
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from "react-bootstrap";
import Navigation from './components/Navigation';
import Home from './pages/home';
import SignUp from './pages/signup';
import FindBooks from './pages/findbooks';
import YourLibrary from './pages/yourlibrary';
import { Route, Routes } from 'react-router-dom';
import Swaps from './pages/swaps';

function App() {
    return (    
        <div className="App">
            <Navigation></Navigation>  
            <Routes>                
                <Route path='/signup' element={<SignUp />}/>               
                <Route path='/swaps' element={<Swaps />}/> 
                <Route path='/findbooks' element={<FindBooks />}/>  
                <Route path='/yourlibrary' element={<YourLibrary />}/>
                <Route path='/' element={<Home />}/>        
                <Route path='*' element={<Home />}/>              
            </Routes>
        </div>  
    );
  }

//   function App() {
//     return (
//         <Container>
//             <Navigation />
//         </Container>
//     );
//   }
  
  
  export default App;