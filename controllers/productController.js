import Product from "../models/product.js";

export function addProduct(req,res){
   console.log(req.user)

   if(req.user==null){
      res.status(401).json({
         message : "Please login and try again"
      })
      return

   }
   if(req.user.role !="admin"){
      res.status(403).json({
         message : "You are not authorized to perfome this action"
      })
      return

   }

   const data=req.body;
   const newProduct=new Product(data);
   newProduct.save()
   .then(()=>{
    res.json({message : "Product add successfully"});
   })
   .catch((error)=>{
    res.status(500).json({error :"Prodcut adition failed"});
   });
}

export async function getProducts(req,res){
   try{
      const products=await Product.find();
      res.json(products)

   }catch(e){
      res.status(500).json({
         message : "Failed to get products"
      })

   }

}


