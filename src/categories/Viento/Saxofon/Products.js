import Catalogo from '../../../components/Catalogo';

const Saxofon = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Saxofón E-flat',
        image:'saxofon-METERK',
        image2:'saxofon-METERK2',
        price: '$6,121.00',
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
        clasification: 'Viento',
        category: 'Saxofon'
    },
    {
        id:'2',
        name:'Saxofón Eb Saxofón Lacado',
        image:'saxofon-LAC',
        image2:'saxofon-LAC2',
        price: '$6,006.00',
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
        clasification: 'Viento',
        category: 'Saxofon'
    }
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Saxofon;