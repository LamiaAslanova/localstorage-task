// let addBtn = document.querySelectorAll(".btn-primary")
// let basketItemsList = document.getElementById("basketItemsList")
// let count = 0
// let basketItems = []

// if (localStorage.getItem("basket") == null) {
//     localStorage.setItem("basket", JSON.stringify([]));
// }

// for (let i = 0; i < addBtn.length; i++) {
//     addBtn[i].addEventListener("click", (e) => {
//         e.preventDefault()
//         let idOfItem = addBtn[i].parentElement.parentElement.getAttribute("data-id")
//         let titleOfItem = addBtn[i].previousElementSibling.previousElementSibling.innerText;
//         let imageOfItem = addBtn[i].parentElement.previousElementSibling.getAttribute("src")
//     })

//     if (localStorage.getItem("basket") == null) {
//         localStorage.setItem("basket", JSON.stringify([]));
//     }
// }

// let renderBasket = (basketItems) => {
//     basketItemsList.innerHTML = ""
//     for (let i = 0; i < basketItems.length; i++) {
//         basketItemsList.innerHTML += `
//         <tr>
//                 <td>${imageOfItem}</td>
//                 <td>${titleOfItem}</td>
//                 <td>@mdo</td>
//               </tr>
//         `
//     }
// }