// https://free-food-menus-api-two.vercel.app/bbqs
    console.log("hello")


async function apicall(){
    let miandiv= document.getElementsByClassName("miandiv")
console.log(miandiv[0])
    let res = await fetch("https://free-food-menus-api-two.vercel.app/bbqs")
    console.log(res)
    let data = await res.json()
    console.log(data)
    data.forEach((item) => {
     
      miandiv[0].innerHTML += `
    <div class="card">
    <img src="${item.img}">
    <p><b>Description: </b> ${item.dsc}</p>
    <p><b>Price: </b> ${item.price}</p>
    <p><b>Rateing : </b> ${item.rate}</p>
    </div>
    `;
    });
    
}
apicall()