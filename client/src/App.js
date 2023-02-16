import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>} />

      </Routes>
    </Router>
  );
}

export default App;
