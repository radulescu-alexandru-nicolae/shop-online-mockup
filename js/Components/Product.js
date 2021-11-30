export default class Product{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.setNav();
        this.setMain();
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
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="shop.html">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <i class="fal fa-search"></i>
                    <i onclick="window.location.href='cart.html';" class="fal fa-shopping-bag"></i>
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
                <img class="img-fluid w-100 pb-1" src="img/shop/1.jpg" id="MainImg" alt="">

           
            </div>

            <div class="col-lg-6 col-md-12 col-12">
                <h6>Home / T-Shirt</h6>
                <h3 class="py-4">Men's Fashion T Shirt</h3>
                <h2>$139.00</h2>
                <select class="my-3">
                  <option>Select Size</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>Small</option>
                  <option>Large</option>
                </select>
                <input type="number" value="1">
                <button class="buy-btn">Add To Cart</button>
                <h4 class="mt-5 mb-4">Product Details</h4>
                <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
            </div>
        </div>
    </section>
        `
        this.container.appendChild(main);
    }
}