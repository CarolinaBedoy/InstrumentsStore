import Catalogo from '../../../components/Catalogo';

const Trombon = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Trombón Wesner STT1000-G',
        image:'trombon-WES',
        image2:'trombon-WES2',
        price: '$4,499.00',
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
        category: 'Trombon'
    },
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Trombon;