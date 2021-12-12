import Api from "../API/Api.js";
import Home from "../Components/Home.js";

export default class CustomerData{
    constructor(){
        this.api=new Api();
      this.customers=this.getCustomers();
      this.connect();

    }
    async getCustomers(){
        try{
            const response=await this.api.returnApi('http://localhost:5000/api/v1/customers',"GET");
            if(response.status===200){
                return response.json();
            }else{
                return null;
            }
        }catch(e){
            return new Error(e);
        }
    }
    async createCustomer(Customer){
        try{
            const response=await this.api.returnApi('http://localhost:5000/api/v1/customers',"POST",Customer);
            if(response.status===200){
                return Customer;
            }else{
                return null;
            }
        
        }catch(e){
            throw new Error(e);
        }
    }

    async connect(email,password){
        let customers=await this.getCustomers();
  
       let p= new Promise((resolve,reject)=>{
            for(let c of customers){
                if(c.email===email&&c.password===password){
                    resolve(c);
                   
                   
                }
            }
        })
        p.then((c)=>{
            let home=new Home(c);
        })
    }
 
  



    async delete(email){
        try{
            const response= await this.api.returnApi('http://localhost:5000/api/v1/customers',"POST",email);
        }catch(e){
            console.log(e);
            throw new Error(e);
        }
    }


  
  
}