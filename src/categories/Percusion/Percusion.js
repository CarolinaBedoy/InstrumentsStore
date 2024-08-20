import Product from '../../components/Product';

const Percusion = () => {
    const instrumentos = [
    {
        name:'Tambores',
        image:'tambor'
    },
    {
        name:'Marimbas',
        image:'marimba'
    },
 {
  name:'Baterías',
  image:'bateria'
},
{
    name:'Maracas',
    image:'maraca'
},
  ];

  return(
    <Product instrumentos={instrumentos}/>
  )
}

export default Percusion;
