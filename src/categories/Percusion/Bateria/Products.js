import Catalogo from '../../../components/Catalogo';

const Bateria = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Batería Digital Behringer XD8USB',
        image:'bateria-BH',
        image2:'bateria-BH2',
        price: '$12,999.00',
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
        category: 'Bateria'
    },
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Bateria;
