import Home from "./Home.js";
import Shop from "./Shop.js";

export default class Cart{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML=``;
        this.setNav();
        this.setMain();
        this.setFooter();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.customer;
        this.products;
        this.loadProducts();
    }
    loadCustomer=()=>{
        let obj=JSON.parse(localStorage.getItem("customer"));
        this.customer=obj;
    }
    loadProducts=()=>{
        let obj=JSON.parse(localStorage.getItem("product"));
        this.products=obj;
        this.addProduct(obj);
    }
    setNav=()=>{
        let nav=document.createElement('nav');
        nav.className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top";
        nav.innerHTML=`
        <div class="container">
        <img src="img/logo1.png" alt="" class="logo">
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
           <i class="fas fa-user-circle"></i>
               <i class="fal fa-shopping-bag"></i>
           </li>
  
        </div>
    </div>
        
        `
        this.container.appendChild(nav);
    }
    setMain=()=>{
        let main=document.createElement('main');
        main.innerHTML=`
        <section id="cart" class="container pt-5">
        <h2 class="font-weight-bold pt-5 mt-5">Shopping Cart</h2>
        <hr>
    </section>

    <section id="cart-container" class="container my-5">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody class="container-products">
              
            </tbody>
        </table>
    </section>

    <section id="cart-bottom" class="container">
        <div class="row">
            <div class="coupon col-lg-6 col-md-6 col-12 mb-4">
                <div>
                    <h5>COUPON</h5>
                    <p>Enter your coupon code if you have one. </p>
                    <input type="text" placeholder="Coupon Code">
                    <button>APPLY COUPON</button>
                </div>
            </div>
            <div class="total col-lg-6 col-md-6 col-12">
                <div>
                    <h5>CART TOTAL</h5>
                    <div class="d-flex justify-content-between">
                        <h6>Subtotal</h6>
                        <p>$215.00 </p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>Shipping</h6>
                        <p>$255.00</p>
                    </div>
                    <hr class="second-hr">
                    <div class="d-flex justify-content-between">
                        <h6>Total</h6>
                        <p>$215.00 </p>
                    </div>
                    <button class="ml-auto">PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </div>
    </section>
        `
        this.container.appendChild(main);
    }
    handleClickNav=(e)=>{
        let obj=e.target;
        console.log(e.target);
        if(obj.classList.contains("shop")){
         let shop=new Shop();
        }else if(obj.classList.contains("fa-shopping-bag")){
            let cart=new Cart();
        }else if(obj.classList.contains("home")){
            let home=new Home();
        }else if(obj.classList.contains("login")){
            let login=new Login();
        }else if(obj.classList.contains("logo")){
            let home=new Home();
        }

    }

     setFooter=()=>{
        let footer=document.createElement('footer');
        footer.innerHTML=`
        
    <footer class="mt-5 py-5">
    <div class="row container mx-auto pt-5">
        <div class="footer-one col-lg-3 col-md-6 col-12">
            <img src="img/logo2.png" alt="">
            <p class="pt-3">Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam maecenas ultricies mi eget mauris.</p>
        </div>
        <div class="footer-one col-lg-3 col-md-6 col-12 mb-3">
            <h5 class="pb-2">Featured</h5>
            <ul class="text-uppercase list-unstyled">
                <li><a href="#">men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">boys</a></li>
                <li><a href="#">girls</a></li>
                <li><a href="#">new arrivals</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">cloths</a></li>

            </ul>
        </div>
        <div class="footer-one col-lg-3 col-md-6 col-12 mb-3">
            <h5 class="pb-2">Contact Us</h5>
            <div>
                <h6 class="text-uppercase">Address</h6>
                <p>123 STREET NAME, CITY, US</p>
            </div>
            <div>
                <h6 class="text-uppercase">Phone</h6>
                <p>(123) 456-7890</p>
            </div>
            <div>
                <h6 class="text-uppercase">Email</h6>
                <p>MAIL@EXAMPLE.COM</p>
            </div>
        </div>

      
    </div>

    
</footer>
`
this.container.appendChild(footer);
    }
    addProduct=(e)=>{
        let tr=document.createElement('tr');
        tr.innerHTML=`
        <td><a href="#0"><i class="fas fa-trash-alt"></i></a></td>
        <td><img src="${e.img}" alt=""></td>
        <td>
            <h5>${e.name}</h5>
        </td>
        <td>
            <h5>${e.price}</h5>
        </td>
        <td><input class="w-25 pl-1" type="number" value="1"></td>
        <td>
            <h5>$130.00 </h5>
        </td>
        `;
        let containerProducts=document.querySelector('.container-products');
        console.log(containerProducts);
        containerProducts.appendChild(tr);

    }
}