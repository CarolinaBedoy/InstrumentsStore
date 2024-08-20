import Catalogo from '../../../components/Catalogo';

const Acordeon = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Acordeón de piano Abanopi',
        image:'acordeon-ABA',
        image2:'acordeon-ABA2',
        price: '$4,729.00',
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
        category: 'Acordeon'
    },
    {
        id:'2',
        name:'Acordeón de piano SPPTTY',
        image:'acordeon-SPP',
        image2:'acordeon-SPP2',
        price: '$663.00',
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
        category: 'Acordeon'
    }
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Acordeon;