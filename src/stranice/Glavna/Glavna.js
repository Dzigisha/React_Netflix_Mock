import React, { useEffect, useState} from 'react'
import Kartica_Film from '../../comp/Kartica_Film';
import Nav from '../../comp/Nav'
import Overlay_kartica from '../../comp/Overlay_kartica';
import {SimpleGrid} from '@chakra-ui/react'
import style from './Glavna_style.module.css'
function Glavna() {

  const [backdropKartica, setBackdropKartica] = useState(false);
  const [filmovi,setFilmovi] = useState();
  const [ucitavanje,setUcitavanje]= useState(true);
  const [pretrazuje,setPretrazuje]=useState('');
  const [trenutniFilm,setTrenutniFilm] = useState();
  const api_key= 'k_r5btvu75'

useEffect(()=>{
  
  const filmovi_api=`https://imdb-api.com/API/Top250Movies/${api_key}`
  
  fetch (filmovi_api).then(response => response.json()).then((data)=>{
    


    const loadFilmovi = [];
    for (const key in data.items){
      const loadFilm = {
        id:key,
        ...data.items[key]

      };
      loadFilmovi.push(loadFilm)
      
    }
    console.log(data)
    console.log(loadFilmovi)
    setFilmovi(loadFilmovi)
    setUcitavanje(false)
   
    
  })
  }
  
 

,[])


if (ucitavanje){
  return (<p>Loading...</p>)
}
async function fetchFilma (id_film){
  console.log(id_film)
  const search_film =`https://imdb-api.com/en/API/Title/${api_key}/${id_film}`
  const response = await fetch(search_film)
  const film = await response.json()
  console.log(film)
  return film
}

const Pretraga = (exp)=>{
  setPretrazuje(exp)
}  
const Zatvori_kartica = ()=>setBackdropKartica(false)

async function Otvori_kartica(id){ 
  console.log(id)
  setTrenutniFilm(await fetchFilma(id))
  setBackdropKartica(true)
  
}

  return (
    <div className={style.bg}>
       <Nav onPretraga={Pretraga}/>
       {backdropKartica ? <Overlay_kartica
       naziv={trenutniFilm.title}
       godina={trenutniFilm.year}
       image={trenutniFilm.image}
       opis = {trenutniFilm.plot}
       trajanje = {trenutniFilm.runtimeStr}
       ocena={trenutniFilm.imDbRating}
       onBackdrop ={Zatvori_kartica}/> : null}
       
    <SimpleGrid pt='30px' px='350px'  minChildWidth='400px' spacingX='50px' spacingY='20px'>
    
      {
        
      filmovi.filter(film=>film.title.toLowerCase().includes(pretrazuje.toLowerCase())).map((film)=>
      <Kartica_Film  onClick={Otvori_kartica} slika={film.image} key={film.id} naziv={film.title}
       godina={film.year}
        rating={film.imDbRating}
        id={film.id}
       
        
         />
      )
      
      }
      </SimpleGrid>
     
    </div>
  )
}

export default Glavna