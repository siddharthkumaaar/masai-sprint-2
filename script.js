//alert("Welcome")

var btn1 = document.getElementById("btn1")
var itemList = document.getElementById('itemList')
var saleComod = document.getElementById('saleComod')

function addComodities(){
    var item = document.getElementById("comod").value
    var qty = document.getElementById("qty").value

    var div = document.createElement('div')
    div.textContent = item+" "+qty+"Kg"
    itemList.appendChild(div)

    var optval = document.createElement('option')
    optval.setAttribute('value',item)
    optval.textContent = item
    saleComod.appendChild(optval)
    // alert(item)
    // alert(qty)
}

function saleComodities()
{
    var item = document.getElementById("comod").value
    var qty = document.getElementById("qty").value
    var saleqty = document.getElementById("saleqty").value
    var saleComod = document.getElementById("saleComod").value

    //qty = qty - saleqty

    // var div = document.createElement('div')
    // div.textContent = item+" "+qty+"Kg"
    //itemList.appendChild(qty)
    alert(saleComod)
}

btn1.addEventListener('click',addComodities)
btn2.addEventListener('click',saleComodities)
