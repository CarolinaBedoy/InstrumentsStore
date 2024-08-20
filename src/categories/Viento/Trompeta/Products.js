import Catalogo from '../../../components/Catalogo';

const Trompeta = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Flat Caballería Trompeta',
        image:'trompeta-SHAM',
        image2:'trompeta-SHAM2',
        price: '$392.00',
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
        category: 'Trompeta'
    },
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Trompeta;