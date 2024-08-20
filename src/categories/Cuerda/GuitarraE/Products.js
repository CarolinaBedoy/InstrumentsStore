import Catalogo from '../../../components/Catalogo';

const GuitarraE = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Yamaha Pacifica Series PAC212VQM CB',
        image:'guitarraE-PAC',
        image2:'guitarraE-PAC2',
        price: '$10,299.00',
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
        category: 'GuitarraE'
    },
    {
        id:'2',
        name:'Guitarra Eléctrica Schecter C-6 FR Pro',
        image:'guitarraE-SCHECTER',
        image2:'guitarraE-SCHECTER2',
        price: '$24,530.00',
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
        category: 'GuitarraE'
    },
    {
        id:'3',
        name:'Guitarra Electrica C/funda Hot Merlot',
        image:'guitarraE-REVSTAR',
        image2:'guitarraE-REVSTAR2',
        price: '$22,575.00',
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
        category: 'GuitarraE'
    }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  GuitarraE;
