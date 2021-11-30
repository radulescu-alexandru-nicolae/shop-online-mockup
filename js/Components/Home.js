import Cart from "./Cart.js";
import Shop from "./Shop.js";

export default class Home{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML='';
        this.setNav();
        this.setHeader();
        this.setMain();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.main=document.querySelector('main');
        this.main.addEventListener('click',this.handleClickProduct);
    }


    setNav=()=>{
        let nav=document.createElement('nav');
        nav.className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top";
        nav.innerHTML=`
        <div class="container">
        <img src="img/logo1.png" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><i id="bar" class="fas fa-bars"></i></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

            <li class="nav-item">
            <p class="nav-link home" style="color:coral;">Home</p>
           </li>
           <li class="nav-item">
               <p class="nav-link shop">Shop</p>
           </li>
           <li class="nav-item">
               <p class="nav-link contact">Contact Us</p>
           </li>
           <li class="nav-item">
            
               <p class="nav-link login">Log In</p>
           </li>
           <li class="nav-item">
               <i class="fal fa-search"></i>
               <i class="fal fa-shopping-bag"></i>
           </li>

        </div>
    </div>
        
        `
        this.container.appendChild(nav);
    }
    setHeader=()=>{
        let header=document.createElement('header');
        header.innerHTML=`
        <div class="container">
        <h5>NEW ARRAIVALS</h5>
        <h1><span>Best Price</span> This Year</h1>
        <p>Shoomatic offers your very comfortable time<br>on walking and exercises.</p>
        <button>Shop Now</button>
    </div>
        `
        this.container.appendChild(header);
    }
    setMain=()=>{
        let main=document.createElement('main');
        main.innerHTML=`
        <section id="brand" class="container">
        <div class="row m-0 py-5">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/1.png" alt="">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/2.png" alt="">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/3.png" alt="">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/4.png" alt="">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/5.png" alt="">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/6.png" alt="">
        </div>
    </section>

    <section id="new" class="w-100">
        <div class="row p-0 m-0">
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/1.jpg" alt="">
                <div class="details">
                    <h2>Extreme Rare Sneakers</h2>
                    <button class="text-uppercase">Shop now</button>
                </div>
            </div>
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/5.jpg" alt="">
                <div class="details">
                    <h2>Awesome Blank Outfit</h2>
                    <button class="text-uppercase">Shop now</button>
                </div>
            </div>
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/3.jpg" alt="">
                <div class="details">
                    <h2>Sportwear Up To 50% Off</h2>
                    <button class="text-uppercase">Shop now</button>
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="my-5 pb-5">
        <div class="container text-center mt-5 py-5">
            <h3>Our Featured</h3>
            <hr class="mx-auto">
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/featured/1.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/featured/2.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/featured/3.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/featured/4.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>

    <section id="banner" class="my-5 py-5">
        <div class="container">
            <h4>MID SEASON’S SALE</h4>
            <h1>Autumn Collection<br>UP TO 20% OFF</h1>
            <button class="text-uppercase">Shop Now</button>
        </div>
    </section>

    <section id="clothes" class="my-5">
        <div class="container text-center mt-5 py-5">
            <h3>Dresses & Jumpsuits</h3>
            <hr class="mx-auto">
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/clothes/1.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/clothes/2.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/clothes/3.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/clothes/1.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>

    <section id="watches" class="my-5">
        <div class="container text-center mt-5 py-5">
            <h3>Best Watches</h3>
            <hr class="mx-auto">
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/watches/1.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/watches/2.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/watches/3.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/watches/1.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>

    <section id="shoes" class="my-5 pb-5">
        <div class="container text-center mt-5 py-5">
            <h3>Running Shoes</h3>
            <hr class="mx-auto">
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/shoes/8.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/shoes/7.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/shoes/6.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/shoes/5.jpg" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>
        
        `
        this.container.appendChild(main)
    }
    handleClickNav=(e)=>{
        let obj=e.target;
        if(obj.classList.contains("shop")){
         let shop=new Shop();
        }else if(obj.classList.contains("fa-shopping-bag")){
            let cart=new Cart();
        }else if(obj.classList.contains("home")){
            let home=new Home();
        }

    }
    handleClickProduct=(e)=>{
        let obj=e.target;
        console.log(obj);
        if(obj.classList.contains("buy-btn")){
           
        }
    }
}