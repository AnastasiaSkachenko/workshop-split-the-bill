const button = document.getElementById("buttonA")

button.addEventListener("click", (event) => {
    event.preventDefault();
    
    let friends = Number(document.getElementById("friends").value)
    let total = Number(document.getElementById("total").value)
    let tips = Number(document.getElementById("tips").value)

    let toPay = Math.ceil((total - tips) / friends)
    let rest = (total - tips) - toPay * friends


    let toPayParagraph = document.getElementById("to-pay")
    let restParagraph = document.getElementById("rest")

    toPayParagraph.innerHTML = toPay + " kr"
    restParagraph.innerHTML = rest + " kr"
})