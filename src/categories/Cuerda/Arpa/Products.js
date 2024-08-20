import Catalogo from '../../../components/Catalogo';

const Arpa = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Arpa SUNNI',
        image:'arpa-SUNNI',
        image2:'arpa-SUNNI2',
        price: '$1,534.00',
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
        category: 'Arpa'
    }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Arpa;
