package com.demo.spring;

import com.demo.spring.data.ProductDB;
import com.demo.spring.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductDB productDB;

    @RequestMapping(path="/products",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok(new ArrayList<>(productDB.getDb().values()));
    }

    @GetMapping(path="products/{product_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity findProductById(@PathVariable("product_id") int id){
       if(productDB.getDb().containsKey(id)){
           return ResponseEntity.ok(productDB.getDb().get(id));
       }else{
           return ResponseEntity.ok(new ResponseData("Product Not Found"));
       }
    }

    @RequestMapping(path="/products", produces = MediaType.APPLICATION_JSON_VALUE,method = RequestMethod.OPTIONS)
    public ResponseEntity getProductTemplat(){

            return ResponseEntity.ok(new Product());
        }


     @PostMapping(path="/products", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addProduct(@RequestBody Product product)   {
        if(productDB.getDb().containsKey(product.getId())){
            return ResponseEntity.ok(new ResponseData("Product Exists in Database"));
        }else{
            productDB.getDb().put(product.getId(),product);
            return ResponseEntity.ok(new ResponseData("Pro duct added to the Database"));
        }
    }


}
