import Product from '../../components/Product';

const Viento = () => {
    const instrumentos = [
    {
        name:'Trompetas',
        image:'trompeta'
    },
    {
      name:'Trombones',
      image:'trombon'
  },
  {
    name:'Acordeones',
    image:'acordeon'
},
  {
    name:'Saxofónes',
    image:'saxofon'
},{
  name:'Clarinetes',
  image:'clarinete'
},
  ];

  return(
    <Product instrumentos={instrumentos}/>
  )
}

export default Viento;
