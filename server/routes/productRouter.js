import express from "express";
import Product from '../models/Product.js'
let router= express.Router();

/*
    url:http://127.0.0.1:8080/product/
*/
router.get("/",(req,resp)=>{
    resp.json({"msg":"Product Root Request"})
});
/*
    USAGE: get all products
    URL: http://127.0.0.1:8080/product/read
    MEthod:GET
    Fields:none
    Access Type:Public
*/
 router.get("/read",async(req,resp)=>{
    try{
       let products  = await Product.find()
       return resp.status(200).json(products)
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
 });


/*
 Usage: Create new Product
 URL  : http://127.0.0.1:8080/product/create
 Method:POST
 Req Fields: name,image,price,qty,info
*/
router.post("/create",async(req,resp)=>{
    try{
        let prodData=req.body
       
        let product=await Product.findOne({name:prodData.name})
       
       
        if(product){
            return resp.status(401).json({"msg":"Produt Already Exits"})
        }
        product=new Product(prodData)
        console.log(product)
        await product.save();
        resp.status(201).json({"msg":"product created sucessfully"})
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
});
/*
router.put();
router.delete(); */

export default router;


