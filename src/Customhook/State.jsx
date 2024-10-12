import { useEffect } from 'react'
import axios from 'axios';

export default function State({ setDataCards }) {

  useEffect(() => {
    axios.get('/Stays.json')
      .then(rs => {
        const dataCards = rs.data.map((val, index) => ({
          key: index,
          photo: val.photo,
          superHost: val.superHost,
          type: val.type,
          beds: val.beds,
          rating: val.rating,
          maxGuests: val.maxGuests,
          country: val.country,
          city: val.city,
          title: val.title
        }));
        
        setDataCards(dataCards);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  
  }, [setDataCards])

  return null;
}