import React,{useState}  from 'react'
import {Flex , Box, Spacer, Input} from '@chakra-ui/react'
import styles from'./Nav_style.module.css'
function Nav(props) {
  
  const [query,setQuery]= useState('');
 
 
  props.onPretraga(query)

  return (
    <>
    
    <nav className={styles.navbar} >
    <Flex size>
    <Box p='4' ml='20px' color='white'>
    <a href='#'>Home</a>
    </Box>
    <Spacer/>
    <Box  pt='2' pr='10'>
    <Input placeholder='Pretrazi' htmlSize='40px' width='auto' onChange={e =>{
     e.preventDefault();
      setQuery(e.target.value)
    
      }} /></Box>

    <Box p='4' mr='40px' color='white'>
    <a href='#'>Login</a>
    </Box>
    </Flex>
    </nav>
    
    </>
  )
}

export default Nav