import Catalogo from '../../../components/Catalogo';

const Guitarra = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Guitarra Yamaha C40 BL Acústica Negra',
        image:'guitar-C40',
        image2:'guitar-C40-2',
        price: '$3,829.00',
        description:'Forma: CG de Yamaha.'+
    'Tapa: picea.'+
    'Cuerdas de: nylon. '+
    'Cantidad de cuerdas: 6'+
    'Forma del cuerpo: clásica.'+
    'Forma del cuello: Clásica. '+
    'Acabado: Brilloso.'+
    'Numero de traste: 18.'+
    'Maquinaria de afinación: Estilo clásica. '+
    'Diapasón y puente: palisandro real.'+
    'Material del diapasón: palo de rosa.',
        clasification: 'Cuerda',
        category: 'Guitarra'
    },
    {
      id:'2',
      name:'Guitarra Electroacustica Fender Mahogany Cd-60sce All Mah 0970113022',
      image:'guitar-CD60',
      image2:'guitar-CD60-2',
      price: '$5,661.00',
      description:'Forma: CG de Yamaha.'+
      'Tapa: picea.'+
      'Cuerdas de: nylon. '+
      'Cantidad de cuerdas: 6'+
      'Forma del cuerpo: clásica.'+
      'Forma del cuello: Clásica. '+
      'Acabado: Brilloso.'+
      'Numero de traste: 18.'+
      'Maquinaria de afinación: Estilo clásica. '+
      'Diapasón y puente: palisandro real.'+
      'Material del diapasón: palo de rosa.',
      clasification: 'Cuerda',
      category: 'Guitarra'
  },
  {
    id:'3',
    name:'Guitarra Yamaha C50 Acústica',
    image:'guitar-C50',
    image2:'guitar-C50-2',
    price: '$3,729.00',
    description:'Forma: CG de Yamaha.'+
    'Tapa: picea.'+
    'Cuerdas de: nylon. '+
    'Cantidad de cuerdas: 6'+
    'Forma del cuerpo: clásica.'+
    'Forma del cuello: Clásica. '+
    'Acabado: Brilloso.'+
    'Numero de traste: 18.'+
    'Maquinaria de afinación: Estilo clásica. '+
    'Diapasón y puente: palisandro real.'+
    'Material del diapasón: palo de rosa.',
    clasification: 'Cuerda',
    category: 'Guitarra'
}
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Guitarra;
