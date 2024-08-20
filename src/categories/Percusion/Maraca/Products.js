import Catalogo from '../../../components/Catalogo';

const Maraca = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Maraca Profesional Meterk',
        image:'maraca-METERK',
        image2:'maraca-METERK2',
        price: '$249.00',
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
        category: 'Maraca'
    },
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Maraca;
