import CustomerData from "../Elements/CustomerData.js";
import ProductData from "../Elements/ProductData.js";
import Cart from "./Cart.js";
import Home from "./Home.js";
import Product from "./Product.js";
import Shop from "./Shop.js";
export default class Login{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.container.innerHTML="";
             this.setNav();
        this.setMain();
        this.setFooter();
        this.loginMeniu();
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.customerData=new CustomerData();
        this.newCustomer={};
        this.loginCustomer={};
        
        this.cont=document.querySelector('.cont');
        this.cont.addEventListener('change',this.handleChange);
        this.submitSignUp=document.querySelector('.submit-sign-up');
        this.submitSignUp.addEventListener('click',this.handleSubmit);
        this.submitSignIn=document.querySelector('.submit-sign-in');
        this.signIn=document.querySelector('.sign-in');
        this.signIn.addEventListener('change',this.handleChangeLogin);
       
        this.submitSignIn.addEventListener('click',this.handleSubmitLogin);
        
      
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
             <i class="fal fa-search"></i>
             <i class="fal fa-shopping-bag"></i>
         </li>

      </div>
  </div>
      
      `
      this.container.appendChild(nav);
  }
    setMain=()=>{
        let main=document.createElement('main');
        main.className="login-container";
        main.innerHTML=`
        <form class="cont">
        <article class="form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input class="login-email type="email" />
          </label>
          <label>
            <span>Password</span>
            <input class="login-password" type="password" />
          </label>
          <p class="forgot-pass">Forgot password?</p>
          <button type="button" class="submit-sign-in">Sign In</button>
        </article>
        <article class="sub-cont">
          <article class="img">
            <div class="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div class="img__btn">
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </article>
          <article class="form sign-up">
            <h2>Time to feel like home,</h2>
      
            <label>
              <span>Email</span>
              <input class="create-email" type="email" />
            </label>
            <label>
              <span>Password</span>
              <input class="create-password" type="password" />
            </label>
            <label>
            <span>Addres</span>
            <input class="create-addres" type="text" />
          </label>
            <button type="button" class="submit-sign-up">Sign Up</button>
          </article>
        </article>
    </form>
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
    loginMeniu=()=>{
            document.querySelector('.img__btn').addEventListener('click', function() {
                document.querySelector('.cont').classList.toggle('s--signup');
              });
    }


  handleChange=(e)=>{
    let obj=e.target;
    
    if(obj.classList.contains('create-password')){
    this.newCustomer.password=obj.value;
    }else if(obj.classList.contains('create-email')){
      this.newCustomer.email=obj.value;
    }else if(obj.classList.contains('create-addres')){
      this.newCustomer.addres=obj.value;
    }
  }
  handleChangeLogin=(e)=>{
    let obj=e.target;
    if(obj.classList.contains('login-email')){
      this.loginCustomer.email=obj.value;
    }else if(obj.classList.contains('login-password')){
      this.loginCustomer.password=obj.value;
    }
  }
  handleSubmitLogin=async(e)=>{
    try{
    
   

      let ok=await this.customerData.connect(this.loginCustomer.email,this.loginCustomer.password);
     this.getIdCustomer(this.loginCustomer.email);
     
    
     
    
   

      if(ok===1){
        let home=new Home(this.loginCustomer);
      }
    
    }catch(error){
      console.log(error);
    }
  }
  handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      this.customerData.createCustomer(this.newCustomer);
      let login=new Login();
    }catch(error){
      console.log(error);
    }
  }

  async getIdCustomer(email){
    let customers=await this.customerData.getCustomers();
  let id;
  
  return new Promise((resolve,reject)=>{
    for(let c of customers){
      if(c.email===email){
      
     id=c.id;
     resolve(id);
    }
      
  
  
    }
  }).then((id)=>{
    this.loginCustomer.id=id;
     window.localStorage.setItem("customer",JSON.stringify(this.loginCustomer));
  
  })


  }

  

   
}