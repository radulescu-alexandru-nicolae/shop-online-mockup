export default class Data{
    api(path,method='GET',body=null){
        const url=path;
        const options={
            method,
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
}