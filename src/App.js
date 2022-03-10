import logo from './logo.svg';
import './App.css';
import Glavna from './stranice/Glavna/Glavna';
import {ChakraProvider} from '@chakra-ui/react'

function App() {
  return (
  <ChakraProvider>
   <Glavna></Glavna>
   </ChakraProvider>
  
  );
}

export default App;
