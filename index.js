let addBtn = document.querySelectorAll(".btn-primary")
let counter = document.getElementById("counter")
let basket

if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"))
}
else {
    basket = []
    localStorage.setItem("basket", JSON.stringify(basket))
}

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", (e) => {
        e.preventDefault()
        let Id = addBtn[i].parentElement.parentElement.getAttribute("data-id");
        let Name = addBtn[i].previousElementSibling.previousElementSibling.innerText;
        let Img = addBtn[i].parentElement.previousElementSibling.getAttribute("src");

        localStorage.setItem("basket", JSON.stringify(basket))
        
        let target = basket.find((x) => x.id == Id)
    
        if(!target){
            let newItem = {
                id: Id,
                name: Name,
                image: Img,
                count: 1
            }
            basket.push(newItem)
            localStorage.setItem("basket", JSON.stringify(basket))
        }
        else{
            target.count++
            localStorage.setItem("basket", JSON.stringify(basket))
        }
        getCount()
    })
}

const getCount = () => {
    counter.innerHTML = basket.length
}

getCount()