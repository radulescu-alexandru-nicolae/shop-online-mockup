import Home from "./Home.js";
import Shop from "./Shop.js";
export default class Product{
    constructor(product){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML=``;
        this.product=product;
        this.setNav();
        this.setMain();
        this.setFooter();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.loadCustomer();
        this.customer={};
        this.produs={};
        this.addCart=document.querySelector('.buy-btn');
        this.sproduct=document.querySelector('.sproduct');
        this.sproduct.addEventListener('click',this.getProduct);

        
    
    }
    loadCustomer=()=>{
        let obj=JSON.parse(localStorage.getItem("customer"));
        this.customer=obj;
    }
    getProduct=(e)=>{
        let obj=e.target;
      if(obj.classList.contains("buy-btn")){
          console.log(e.target.parentNode.parentNode);
          this.produs.name=document.querySelector('.name-product').textContent;
          this.produs.img=document.querySelector('.img-fluid').src;
          this.produs.price=document.querySelector('.price').textContent;
          this.produs.quantity=document.querySelector('.quantity').value;
          this.produs.customerId=this.customer.id;
         window.localStorage.setItem("product",JSON.stringify(this.produs));
         let home=new Home(this.customer);
      }
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
        <section class="container sproduct my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" src="${this.product.img}" id="MainImg" alt="">
            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <h6>Home / T-Shirt</h6>
                <h3 class="py-4 name-product">${this.product.name}</h3>
                <h2 class="price">${this.product.price}</h2>
                <select class="my-3">
                  <option>Select Size</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>Small</option>
                  <option>Large</option>
                </select>
                <input type="number" value="1" class="quantity">
                <button class="buy-btn">Add To Cart</button>
                <h4 class="mt-5 mb-4">Product Details</h4>
                <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
            </div>
        </div>
    </section>
        `
        this.container.appendChild(main);
        
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

    handleClickNav=(e)=>{
        let obj=e.target;
        if(obj.classList.contains("shop")){
            let shop=new Shop();
        }else if(obj.classList.contains("home")){
           let home=new Home();
        }else if(obj.classList.contains("fa-shopping-bag")){
        let cart=new Cart();
        }

    }
}