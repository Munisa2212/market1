const instance = axios.create({
    baseURL: 'https://679e04ed946b0e23c0625fcb.mockapi.io'
  });

let boxes = document.querySelector('.boxes')
let iname = document.querySelector('#name')
let iprice = document.querySelector('#price')
let img = document.querySelector('#photo')
let btn = document.querySelector('#btn')


// instance.get('/crud').then(res => showData(res.data))
function addProds() {
    instance.post('/crud', {
        name: iname.value,
        price: iprice.value,
        image: img.value
    }).then((res) => console.log(res)
    )
}


btn.addEventListener('click', addProds);
