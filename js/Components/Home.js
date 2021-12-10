import ProductData from "../Elements/ProductData.js";
import Cart from "./Cart.js";
import Login from "./Login.js";
import Product from "./Product.js";
import Shop from "./Shop.js";

export default class Home{
    constructor(customer){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML='';
        this.setNav();
        this.setHeader();
        this.setMain();
        this.setFooter();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.main=document.querySelector('main');
        this.main.addEventListener('click',this.handleClickProduct);
        this.produs={};
        // this.data=new Data();
        this.productData=new ProductData();
        // this.generateProducts();
        // this.data.createProducts();
        this.generateProductsDb();
        this.customer=customer;
        

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

    <section id="featured" class="my-5 pb-5 men-section">
        <div class="container text-center mt-5 py-5">
            <h3>Men section</h3>
            <hr class="mx-auto">
        </div>
        <div class="row mx-auto container-fluid products-men">
          
        </div>
    </section>

    <section id="banner" class="my-5 py-5">
        <div class="container">
            <h4>MID SEASON’S SALE</h4>
            <h1>Autumn Collection<br>UP TO 20% OFF</h1>
            <button class="text-uppercase">Shop Now</button>
        </div>
    </section>

    <section id="clothes" class="my-5 women-section">
        <div class="container text-center mt-5 py-5">
            <h3>Women section</h3>
            <hr class="mx-auto">
        </div>
        <div class="row mx-auto container-fluid products-women">
           
        </div>
    </section>

    <section id="watches" class="my-5 jewlery-category" >
        <div class="container text-center mt-5 py-5">
            <h3>Jewlery</h3>
            <hr class="mx-auto">
        </div>
        <div class="row mx-auto container-fluid  products-jewlery">
         
               
        </div>
    </section>

    <section id="shoes" class="my-5 pb-5 electronics">
        <div class="container text-center mt-5 py-5">
            <h3>Electronics</h3>
            <hr class="mx-auto">
        </div>
        <div class="row mx-auto container-fluid products-electronic">
           
        </div>
    </section>
        
        `
        this.container.appendChild(main)
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

    handleClickProduct=(e)=>{
        let obj=e.target;
        if(obj.classList.contains("buy-btn")){
          let produsCont=e.target.parentNode;
           this.produs={
               name:produsCont.querySelector('.p-name').textContent,
               price:produsCont.querySelector('.p-price').textContent,
                img:produsCont.querySelector('img').src

           }
           let product=new Product(this.produs);
        }
    }
    async generateProductsDb(){
    
        try{
            let d=await this.productData.getProductsDb();
         
            if(d!==null){

        this.insertProducts(d);
    }
            
  
           
        }catch(e){
            return new Error(e);
        }
    }
    async addPhoto(){
        let img= await this.returnImages();
      

        let produse=document.querySelectorAll('.product');

        produse.forEach(e=>{
            for(let poz of img){
                e.querySelector('img').src=poz.image;
                e.querySelector('.loader').style.display="none";

            }
           
        })
    }
    insertProducts(e){
        let menCategory=document.querySelector('.products-men');
        menCategory.appendChild(this.createContainer(e));

      
        for(let product of e){
            menCategory.append(this.createContainer(product));
        }
        

     this.addPhoto();

    
       
    }
    returnImages=()=>{
        return  new Promise((resolve,reject)=>{

        setTimeout(()=>{
                resolve(this.productData.getProducts());
            },100)
        });
    }
    // async generateProducts(){
    //     let prorducts=document.querySelectorAll('.product');
    //     console.log(prorducts);
    //     try{
    //         let d=await this.data.getProducts();
    //         if(d!==null){
              
    //             this.insertProducts(d);
    //         }
    //     }catch(e){
    //         return new Error(e);
    //     }
    // }
    
    insertProducts(e){
        let menCategory=document.querySelector('.products-men');
     
        for(let product of e){
            menCategory.appendChild(this.createContainer(product));
        }
        

     this.addPhoto();

    
       
    }
    // insertProducts(e){
    //     let menCategory=document.querySelector('.products-men');
    //     let womenCategory=document.querySelector('.products-women');
    //     let electronicCategory=document.querySelector('.products-electronic');
    //     let jewleryCategory=document.querySelector('.products-jewlery');

    //     for(let product of e){
    //          if(product.category==="men's clothing"){
    //              menCategory.appendChild(this.createContainer(product));
                 

    //          }else if(product.category==="women's clothing"){
    //              womenCategory.appendChild(this.createContainer(product));
    //          }else if(product.category==="electronics"){
    //              electronicCategory.appendChild(this.createContainer(product));
    //          }else if(product.category==="jewelery"){
    //              jewleryCategory.appendChild(this.createContainer(product));
    //          }

    //     }
    
   
    // }
    
    createContainer(element,imgB){
        let div=document.createElement('div');
        div.className="product text-center col-lg-3 col-md-4 col-12 ";
        let img = document.createElement('img');
        img.src=imgB;
        img.className="img-fluid mb-3 product-img";
        let loader=document.createElement('div');
        loader.className="loader";
        div.appendChild(loader);
    
    
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
        name.textContent=element.name;
        
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