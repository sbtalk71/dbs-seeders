package com.demo.spring.data;

import com.demo.spring.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository
public class ProductDB {
    private HashMap<Integer, Product> db=new HashMap<Integer, Product>();
    public ProductDB(){
        db.put(100,new Product(100,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(101,new Product(101,"OnePlus","OnePlus","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(102,new Product(102,"Galaxy Ultra","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(103,new Product(103,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(104,new Product(104,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(105,new Product(105,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(106,new Product(106,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(107,new Product(107,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(108,new Product(108,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
        db.put(109,new Product(109,"Oppo v5","Oppo","smartphones","Oppo smartphones are good",1200,0.0,4,200));
    }

    public HashMap<Integer, Product> getDb() {
        return db;
    }
}
