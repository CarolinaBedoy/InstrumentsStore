import Catalogo from '../../../components/Catalogo';

const Marimba = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Marimba Glockenspiel Irfora 10 notas',
        image:'marimba-GLOCK',
        image2:'marimba-GLOCK2',
        price: '$2,524.00',
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
        clasification: 'Percusion',
        category: 'Marimba'
    },
    {
      id:'2',
      name:'Marimba Irfora Madera Pino',
      image:'marimba-IRFORA',
      image2:'marimba-IRFORA2',
      price: '$400.00',
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
      clasification: 'Percusion',
      category: 'Marimba'
  }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Marimba;
