const productos = [
    {id:'1',
name:'sony',
precio:'$5500',
category:'audio',
imagen:'https://cdn.pixabay.com/photo/2017/03/23/03/58/radio-for-car-2167269_960_720.png',
stock: 10,
descripcion:'Mantente en contacto en la carretera con la conectividad Bluetooth® doble del DSX-A410BT. Conecta de forma inalámbrica un primer teléfono para reproducir música, obtener direcciones y comunicarte con tus contactos. Agrega un segundo teléfono para realizar llamadas adicionales con manos libres mientras viajas.',
},
{id:'2',
name:'Rims',
precio:'$8000',
category:'llantas',
imagen: 'https://image.made-in-china.com/155f0j00NLsRMbjzSwch/Sports-Rims-for-Cars.jpg',
stock: 10 ,
descripcion:'Material Aluminio Tipo Aro de Acero Wheel DriveRWD Diámetro de rueda Hub 16-20 Acabado	NegroAccesorios ruedas	Tapacubos',
},
{id:'3',
name:'Pirelli',
precio:'$1200',
category:'Cubiertas',
imagen:'https://d3nv2arudvw7ln.cloudfront.net/images/global/231/180/scorpion-MUD-sfondo-1505470065788.jpg',
stock: 10,
descripcion:'Constantemente desafiamos los límites de la tecnología, el estilo y la sustentabilidad, marcando tendencias en todo el mundo'}
 ];



export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos.find( prod=> prod.id === id))
        },1000)
    }

    )  
}
export const getProducts =()=>  {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(productos)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.category === categoryId))
        },1000)
    })
}
