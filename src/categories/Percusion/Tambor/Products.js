import Catalogo from '../../../components/Catalogo';

const Tambor = () => {
    const instrumentos = [
    {
        id:'1',
        name:'Tambor Africano Irfora',
        image:'tambor-IRFORA',
        image2:'tambor-IRFORA2',
        price: '$548.00',
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
        category: 'Tambor'
    }
    
  ];

  return(
    <Catalogo instrumentos={instrumentos}/>
  )
}

export default  Tambor;
