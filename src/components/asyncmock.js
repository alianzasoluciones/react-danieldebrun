const productos = [
    {id:'1',
name:'sony',
precio:'$5500',
categorya:'audio',
img:'https://cdn.pixabay.com/photo/2017/03/23/03/58/radio-for-car-2167269_960_720.png',
stock: 10,
descripcion:'Mantente en contacto en la carretera con la conectividad Bluetooth® doble del DSX-A410BT. Conecta de forma inalámbrica un primer teléfono para reproducir música, obtener direcciones y comunicarte con tus contactos. Agrega un segundo teléfono para realizar llamadas adicionales con manos libres mientras viajas.',
},
{id:'2',
name:'paioner',
precio:'$8000',
categorya:'audio',
img: 'https://pioneer-latin.com/wp-content/uploads/2019/09/Receptores-de-audio-y-medios.fw-1.png',
stock: 10 ,
descripcion:'2700rpm',
},
{id:'3',
name:'xion',
precio:'$1200',
categorya:'audio',
img:'https://http2.mlstatic.com/D_NQ_NP_725772-MLU48961503130_012022-O.jpg',
stock: 10,
descripcion:'800rpm'}
 ]

export const getProductsByID = ({id}) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            resolve(productos)
        }, 2000)
    })
}