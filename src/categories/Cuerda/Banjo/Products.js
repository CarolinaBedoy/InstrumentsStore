import Catalogo from '../../../components/Catalogo';

const Banjo = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Banjo BAOBLAZE',
        image:'banjo-BAO',
        image2:'banjo-BAO2',
        price: '$2,179.00',
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
        category: 'Banjo'
    }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Banjo;
