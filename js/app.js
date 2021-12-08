import Home from "./Components/Home.js";
import Cart from "./Components/Cart.js";
import Shop from "./Components/Shop.js";
import Login from "./Components/Login.js";
let customer={
    email:"test2",
    password:"test2",
    id:10
}

// window.localStorage.setItem("customer",JSON.parse(customer));

let home = new Home(customer);
// let login=new Login();


