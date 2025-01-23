import './App.css';
import MyNav from './Componenti/MyNav.js';
import MyFooter from './Componenti/MyFooter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Componenti/Welcome.js';
import AllTheBooks from './Componenti/AllTheBooks.js';
import { Container } from "react-bootstrap"

function App() {
  return (    <> 
   <MyNav/>
   <Welcome/>
   <Container> 
<AllTheBooks/>
</Container> 
   <MyFooter/>
   </>
  );
}

export default App;
