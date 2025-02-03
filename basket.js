let korzinka = document.querySelector(".korzinka")

const instance = axios.create({
    baseURL: "https://679a1481747b09cdcccd9973.mockapi.io",
});

function show(arr) {
    let t = localStorage.getItem("array");
    let exercise = JSON.parse(t);
    korzinka.innerHTML = "";
    exercise.forEach((cartItem) => {
        let findProd = arr.find(product => product.id === cartItem);
        if (findProd) {
            korzinka.insertAdjacentHTML("beforeend", `
                <div class="card">
                    <img src="${findProd.photo}">
                    <h1>${findProd.name}</h1>
                    <p>${findProd.price}</p>
                    <button onclick="deletePro(${findProd.id})" type="button">Delete</button>
                </div>
            `);
        }
    });
}

function deletePro(id) {
    let t = localStorage.getItem("array");
    let arr = JSON.parse(t);
    const newArr = arr.filter(item => +item !== id );
    localStorage.setItem("array", JSON.stringify(newArr));
    location.reload();
}

instance.get("/two").then((res) => show(res.data));

