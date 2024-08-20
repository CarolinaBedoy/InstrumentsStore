import Catalogo from '../../../components/Catalogo';

const Violin = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Violín antiguo La Sevillana Maple DLX-LSV44',
        image:'violin-SEVILLANA',
        image2:'violin-SEVILLANA-2',
        price: '$2,239.00',
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
        category: 'Violin'
    },
    {
        id:'2',
        name:'Violín de madera de abeto. Irfora ',
        image:'violin-IRFORA',
        image2:'violin-IRFORA2',
        price: '$1,746.00',
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
        category: 'Violin'
    },
    {
        id:'3',
        name:'Violín Acustico 4/4 Audiotek',
        image:'violin-AUDIOTEC',
        image2:'violin-AUDIOTEC2',
        price: '$2,300.00',
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
        category: 'Violin'
    }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Violin;
