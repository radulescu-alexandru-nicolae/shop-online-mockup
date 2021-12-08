import Api from "../API/Api.js";

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
        return new Promise((resolve,reject)=>{
            let ok=0;
            for(let customer of customers){
                if(customer.email===email&&customer.password===password){
                    ok=1;
                }
            }
            resolve(ok);

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