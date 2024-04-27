const tBody = document.getElementById("basketItemsList")
if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"))
}
else {
    basket = []
    localStorage.setItem("basket", JSON.stringify(basket))
}

const renderUI = (item) => {
    tBody.innerHTML = ""
    for (let i = 0; i < item.length; i++) {
        tBody.innerHTML += `
            <tr>
                <td><img width=150px src="${item[i].image}" /></td>
                <td>${item[i].name}</td>
                <td>${item[i].count}</td>
            </tr>
        `
    }
}

const getCount = () => {
    counter.innerHTML = basket.length
}

getCount()
renderUI(basket)