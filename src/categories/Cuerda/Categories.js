import Product from '../../components/Product';

const Cuerda = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Guitarras acústicas',
        image:'guitarra'
    },
    {
        id:'2',
        name:'Pianos',
        image:'piano'
    },
    {
      id:'3',
      name:'Violines',
      image:'violin'
  },
  {
    id:'4',
    name:'Guitarras eléctricas',
    image:'gelectrica'
},
  {
    id:'5',
    name:'Banjos',
    image:'banjo'
},{
  id:'6',
  name:'Arpas',
  image:'arpa'
},
  ];

  return(
    <Product instrumentos={instrumentos}/>
  )
}

export default Cuerda;
