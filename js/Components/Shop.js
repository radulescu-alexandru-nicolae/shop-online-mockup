import ProductData from "../Elements/ProductData.js";
import Cart from "./Cart.js";
import Home from "./Home.js";
import Product from "./Product.js";
import Login from "./Login.js";

export default class Shop{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML='';
        this.setNav();
        this.setMain();
        this.setFooter();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        // this.data=new Data();
        this.productData=new ProductData();
        this.generateProducts();
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
        
        <section id="featured" class="my-5 py-5">
        <div class="container mt-5 py-5">
            <h2 class="font-weight-bold">Our Featured</h2>
            <hr>
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container products-shop">
            

           
        </div>
        <section aria-label="...">
        <ul class="pagination mt-5">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </section>
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
    async generateProducts(){
        try{
            let d=await this.productData.getProducts();
            if(d!==null){
               
                this.insertProducts(d);
            }
        }catch(e){
            return new Error(e);
        }
    }
    insertProducts(e){
      let productShop=document.querySelector('.products-shop');

        for(let product of e){
           productShop.appendChild(this.createContainer(product))
;
        }
    
   
    }
    createContainer(element){
        let div=document.createElement('div');
        div.className="product text-center col-lg-3 col-md-4 col-12";
        let img = document.createElement('img');
        img.src=element.image;
        img.className="img-fluid mb-3 product-img";
        div.appendChild(img);
        let star=document.createElement('div');
        star.className="star";
        star.innerHTML=`
        <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
        `;
        div.appendChild(star);
        let name=document.createElement('p');
        name.className="p-name";
        name.textContent=element.title;
        
        let price=document.createElement('p');
        price.className="p-price";
        price.innerHTML=`$${element.price}`;
        let button =document.createElement('button');
        button.className="buy-btn";
        button.textContent="Buy Now";

        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(button);
        return div;
    }
 
}