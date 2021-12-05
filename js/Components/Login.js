import Data from "../API/Data.js";

export default class Login{
    constructor(){
        this.container=document.querySelector('.container-first');
        this.data=new Data();
        this.checkAccount();
   
  
        // this.createAccount("test3@gmail.com","test3","TestOras")

    }

    async checkAccount(){
       
        try{
            let d=await this.data.getCustomers();
            console.log(d);
            if(d!==null){
            this.checkCustomer();
            }
        }catch(e){
            return new Error(e);
        }

       
    }
    checkCustomer=(email,password)=>{
        return new Promise((resolve,reject)=>{
          customers.forEach(e=>{
                console.log(e);
                if(e.email===email&&e.password===password){
                    resolve(true);
                }else{
                    reject(false);
                }
            })
        })
    }

    async createAccount(email,password,addres){
        if(this.checkCustomer(email,password)===false){
            let cust={
                email:email,
                password:password,
                addres:addres
            }
            this.data.createCustomer(cust);
        }
    }


    
}