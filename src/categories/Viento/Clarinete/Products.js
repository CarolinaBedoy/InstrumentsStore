import Catalogo from '../../../components/Catalogo';

const Clarinete = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Clarinete FT-6402E KLINGT',
        image:'clarinete-KLI',
        image2:'clarinete-KLI2',
        price: '$3,720.00',
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
        category: 'Clarinete'
    },
    {
        id:'2',
        name:'Clarinete ABS 17 teclas bB',
        image:'clarinete-ABS',
        image2:'clarinete-ABS2',
        price: '$2,741.00',
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
        category: 'Clarinete'
    }
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default Clarinete;