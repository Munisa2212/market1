let box = document.querySelector(".root")

const instance = axios.create({
    baseURL: "https://679a1481747b09cdcccd9973.mockapi.io",
});

function show(arr) {
    box.innerHTML = ""
    arr.forEach((element) => {
        box.insertAdjacentHTML("beforeend", `
            <div class="card">
                <img src="${element.photo}}">
                <h1>${element.name}</h1>
                <p>${element.price}</p>
                <button onclick="deletePro('${element.id}')">Delete</button>
                <button onclick="buyItem('${element.id}')">Buy</button>
            </div>
        `);
    });
}

instance.get("/two").then((res)=>show(res.data))

function deletePro(son){
    instance.delete(`/two/${son}`).then((res)=>location.reload())
}

function buyItem(id){
    let t = localStorage.getItem("array")
    let arr = JSON.parse(t)
    arr.push(id)
    localStorage.setItem("array", JSON.stringify(arr))
}