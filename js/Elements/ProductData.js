import Api from "../API/Api.js";

export default class ProductData{
    constructor(){
        this.api=new Api();
    }
    async getProducts(){
        try{
            let response=await this.api.returnApi('https://fakestoreapi.com/products',"GET");

            if(response.status===200){
                return response.json();
            }else{
                return null;
            }
        }catch(e){
            return new Error(e);
        }
    }

    async getProductsDb(){
        try{
            const response=await this.api.returnApi('http://localhost:5000/api/v1/products',"GET");
           
            if(response.status===200){
                return response.json();
            }else{
                return null;
            }
        }catch(e){
            return new Error(e);
        }
    }
}