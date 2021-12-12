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
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        this.customerData=new CustomerData();
        this.newCustomer={};
        this.loginCustomer={};
        this.create=document.querySelector('.create');
        this.create.addEventListener('change',this.handleChange);
        this.signIn=document.querySelector('.signIn');
        this.signIn.addEventListener('change',this.handleChangeLogin);
        this.submitSignUp=document.querySelector('.submitCreateButton');
        this.submitSignUp.addEventListener('click',this.handleSubmit);
        this.submitSignIn=document.querySelector('.submitSignIn');
        this.submitSignIn.addEventListener('click',this.handleSubmitLogin);
     
        this.loginMeniu=document.querySelector('.login-meniu');
        this.loginMeniu.addEventListener('click',this.changeLogin); 
    
        
      
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
        main.className="login-container";
        main.innerHTML=`
        <article class="login-meniu">
        <section class="img-login">
        </section>
        <section class="signIn "> 
            <section class="title-signIn">
                <h2>Sign In</h2>
                <i class="fab fa-facebook-f"></i>
            </section>
            <section class="form-signIn container-form">
                <form action="">
                  <section class="inputContainer">
                    <label for="username">Email</label>
                    <input type="text" placeholder="Email" class="login-email">
                    <label for="passowrd">Password</label>
                    <input type="password" placeholder="Password" class="login-password">
                  </section>
                    <button class="submitSignIn">Sign In</button>
                    <section class="container-forgot-password">
                        <div class="remember">
                            <input type="checkbox">
                            <p>Remember me</p>
                        </div>
                        <h5 class="forgot-password">Forgot Password</h5>
                    </section>

                    <p class="notMember">Not a member?<span  class="signUpButton">Sign Up</span></p>

                </form>
            </section>
            
        </section>
 
        <section class="create displayOff " > 
            <section class="title-signIn">
                <h2>Create account</h2>
                <i class="fab fa-facebook-f"></i>
            </section>
            <section class="form-logIn container-form">
                <form action="">
                  <section class="inputContainer">
                      <div class="container-create-email">
                        <label for="username">Email</label>
                        <input type="text" placeholder="Email" class="create-email">
                        <i class="fas fa-exclamation-circle"></i>
                        <p  class="incorect-email">Email must contains @</p>
                        <p class="existing-email">Ther is already an account with this email</p>
                      </div>
            
                      <div class="container-create-password">
                        <label for="passowrd">Password</label>
                        <input type="password" placeholder="Password" class="create-password">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>Must contain a lowercase,uppercase letter and a number</p>
                      </div>
                  
                      <div class="container-create-addres">
                        <label for="addres">Addres</label>
                        <input type="text" placeholder="Addres" class="create-addres">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>You need to have at least 6 characters</p>
                      </div>
                  </section>
                    <button class="submitCreateButton">Create account</button>
                  

                    <p class="notMember">If you have already an account<span class="logInChange">Log In</span></p>

                </form>
            </section>
        </section> 
    </article>
        `
        this.container.appendChild(main);
    }

    changeLogin=(e)=>{
      let obj=e.target;
      this.newCustomer={};
      if(obj.classList.contains("signUpButton")){
        document.querySelector('.displayOff').className="create";
        document.querySelector('.signIn').className="displayOff";

      } else if(obj.classList.contains("logInChange")){
        document.querySelector('.displayOff').className="signIn";
        document.querySelector('.create').className="displayOff";
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
  handle=(validator)=>{


  if(validator!==true){
return false;
  }
  return true;
  
  }
   isValidEmail(email){
   
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
 isValidPassword(password){
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}
async returnCustomers(){
return new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve(this.customerData.getCustomers());
  },100)

})

}
async checkEmail(email){
  let customers=await this.returnCustomers();
  let ok=0;
  for(let cust of customers){
    if(cust.email===email){
    ok=1;
   
    }
  }
  if(ok===1){
    document.querySelectorAll('.container-create-email p')[1].style.display="unset";
 
  }else{
    document.querySelectorAll('.container-create-email p')[1].style.display="none";
    this.newCustomer.email=email;
  }

}
  handleChange=(e)=>{
    let obj=e.target;
    if(obj.classList.contains('create-password')){
      if(this.handle(this.isValidPassword(obj.value))===false){
        obj.parentNode.querySelector('p').style.display="unset";
      }else{
        obj.parentNode.querySelector('p').style.display="none";
        this.newCustomer.password=obj.value;
      }
  
    
    }else if(obj.classList.contains('create-email')){
      if(this.handle(this.isValidEmail(obj.value))===false){
        obj.parentNode.querySelectorAll('p')[0].style.display="block";
        obj.parentNode.querySelector('i').style.display="unset";
        
      }else if(this.handle(this.isValidEmail(obj.value))===true){
        obj.parentNode.querySelectorAll('p')[0].style.display="none";
        obj.parentNode.querySelector('i').style.display="none";
        this.checkEmail(obj.value);
      }

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
    e.preventDefault();
    try{
    
   

  
     
     
    this.customerData.connect(this.loginCustomer.email,this.loginCustomer.password)

  
    
    }catch(error){
      console.log(error);
    }
  }
  handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      console.log(this.newCustomer);
      if(this.newCustomer.email!==undefined&&this.newCustomer.password!==undefined){
        console.log('a');
        this.customerData.createCustomer(this.newCustomer);

      }
      let login=new Login();
    }catch(error){
      console.log(error);
    }
  }



  

   
}