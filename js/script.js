
for (let i = 0; i <3; ++i) {
    var cards = document.querySelectorAll(".cards-1.row");
    var cardLenght = cards[i].children[0].offsetWidth;
    let arrowLeft = document.getElementsByClassName("arrow-left")[i];
    let arrowRight = document.getElementsByClassName("arrow-right")[i];

    var scrollStep = cardLenght*5;

    let maxScroll = cards.scrollWidth - cards.offsetWidth;
    arrowRight.addEventListener("click", () => {
    cards[i].scrollLeft += scrollStep;
    if (cards.scrollLeft >= maxScroll)
    {
        cards[i].scrollLeft = maxScroll;
        arrowRight.style.display = "none";
    }
    arrowLeft.style.display = "block";
    });

    arrowLeft.addEventListener("click", () => {
    cards[i].scrollLeft -= scrollStep;
    if (cards[i].scrollLeft <= 0) 
    {
        cards[i].scrollLeft = 0;
        arrowLeft.style.display = "none";
    }
    arrowRight.style.display = "block";
    });
    arrowLeft.style.display = "none";
}
// cart
var cart =document.querySelector('.cart-offcanvas') ;
var cartIcon = document.querySelector('.cart');
var backdrop= document.querySelector('.cart-backdrop');
function open_close_cart()
{ 
    cart.classList.toggle("active");
    backdrop.classList.toggle("active");
}

document.addEventListener('click', function(event) {
    if (cart.classList.contains('active')) {
        if (!cart.contains(event.target) && !cartIcon.contains(event.target)) {
            cart.classList.remove('active');
            backdrop.classList.remove('active');
            }
    }
});
// Add To Cart
var addToAcartBtns=document.querySelectorAll(".add-to-cart");
console.log(addToAcartBtns);

// ------------speakers---------------------------------
function gotopage(){
    window.location.href="speakers.html";
}
function gotoProductPage(){
    window.location.href="product.html"
}


