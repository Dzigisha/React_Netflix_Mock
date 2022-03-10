import React from 'react'
import {Box, Center,Flex} from '@chakra-ui/react'
import style from './Kartica_style.module.css'
function Kartica_Film(props) {
  const id = props.id;
  
 

 
 
  return (
    <Box  borderLeftRadius='15px' borderRadius='15px' onClick={()=>props.onClick(id)} className={style.bg}   height='176px'    >
   <Flex>
        <img className={style.slikica} src={props.slika}  alt = {props.naziv}></img>
        <Box className={style.drugi_deo} pl='20px' pt='10px'>
        <p className={style.naziv} >{props.naziv}</p>
        <p>{props.godina}</p>
        <p>{props.rating}/10</p>
      
        </Box>
        </Flex>
    </Box>
  )
}

export default Kartica_Film