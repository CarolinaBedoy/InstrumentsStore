import Catalogo from '../../../components/Catalogo';

const Piano = () => {
    const instrumentos = [
    {
        id:'1',
        name:'PIANO DIGITAL ARIUS YDP103RSPA DE YAMAHA',
        image:'piano-ARIUS',
        image2:'piano-ARIUS-2',
        price: '$27,500.00',
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
        category: 'Piano'
    }
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Piano;
