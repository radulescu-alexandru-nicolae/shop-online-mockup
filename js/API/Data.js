export default class Data{
    api(path,method='GET',body=null){
        const url=path;
        const options={
            method,
            mode:"cors",
            headers:{
                'Content-Type': 'application/json; charset=utf-8' ,
            }
        }
        if(body!==null){
            options.body=JSON.stringify(body);
        }   
        
        return fetch(url,options);
    }
    async getProducts(){
       
        try{
            const response=await this.api('https://fakestoreapi.com/products',"GET");
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
            const response=await this.api('http://localhost:5000/api/v1/products',"GET");
           
            if(response.status===200){
                return response.json();
            }else{
                console.log('d');
                return null;
            }
        }catch(e){
            return new Error(e);
        }
    }

    async getCustomers(){
        try{
            const response=await this.api('http://localhost:5000/api/v1/customers',"GET");
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
            const response=await this.api('http://localhost:5000/api/v1/customers',"GET");
            if(response.status===200){
                return Customer;
            }else{
                return null;
            }
        
        }catch(e){
            throw new Error(e);
        }
    }
    // async createProducts(){
    //     fetch('https://fakestoreapi.com/products',{
    //         method:"POST",
    //         body:JSON.stringify(
    //             {
    //                 title: 'test product',
    //                 price: 13.5,
    //                 description: 'lorem ipsum set',
    //                 image: 'https://i.pravatar.cc',
    //                 category: 'electronic'
    //             }
    //         )
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // }
}