export default {
    state : {
        shopList : [
            { 
                id: 1, 
                title: 'Nike Red',
                descr : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. electronic typesetting, remaining essentially unchanged.",
                img : require('../assets/img/1.png'),
                gallery : [
                    {  name: 'Nike boots First', img: require('../assets/img/1.png')},
                    {  name: 'Nike boots Second', img: require('../assets/img/2.png')},
                    {  name: 'Nike boots Third', img: require('../assets/img/3.png')},
                ]
            },
            { 
                id: 2, 
                title: 'Nike Default',
                descr : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. electronic typesetting, remaining essentially unchanged.",
                img : require('../assets/img/4.png'),
                gallery : [
                    {  name: 'Nike boots First', img: require('../assets/img/4.png')},
                    {  name: 'Nike boots Second', img: require('../assets/img/5.png')},
                    {  name: 'Nike boots Third', img: require('../assets/img/6.png')},
                ]
            },
            { 
                id: 3, 
                title: 'Nike Green',
                descr : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. electronic typesetting, remaining essentially unchanged.",
                img : require('../assets/img/7.png'),
                gallery : [
                    {  name: 'Nike boots First', img: require('../assets/img/7.png')},
                    {  name: 'Nike boots Second', img: require('../assets/img/8.png')},
                    {  name: 'Nike boots Third', img: require('../assets/img/9.png')},
                ]
            },
            { 
                id: 4, 
                title: 'Nike Street',
                descr : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. electronic typesetting, remaining essentially unchanged.",
                img : require('../assets/img/10.png'),
                gallery : [
                    {  name: 'Nike boots First', img: require('../assets/img/11.png')},
                    {  name: 'Nike boots Second', img: require('../assets/img/12.png')},
                ]
            },
        ]
    },
    mutations : {},
    actions : {},
    getters : {
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}