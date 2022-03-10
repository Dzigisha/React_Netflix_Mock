import React from 'react'
import {Box, Flex, Spacer} from '@chakra-ui/react'
import style from './Overlay_kartica.module.css'
function Overlay_kartica(props) {
  return (
      <div onClick={props.onBackdrop} className={style.backdrop}>
        
          <Box   className={style.kartica}>
              <Flex>
            <Box>
            <img className={style.slikica} alt={props.naziv} src={props.image}></img>
            </Box>
            <Spacer></Spacer>
            <Box>
            <p className={style.text}>{props.naziv}</p>
            <p className={style.godina}>Godina izdavanja : {props.godina}</p>
            <p className={style.godina}>Trajanje : {props.trajanje}</p>
           
            <Box height='60px'    width='60px' className={style.ocena} backgroundColor='#0D82EC'><p>{props.ocena}</p></Box>
            
            </Box>
            </Flex>
            <h2 className={style.opis}>Opis</h2>
            <p className={style.opis}>{props.opis}</p>
          </Box>
        
      </div>
   
  )
}

export default Overlay_kartica