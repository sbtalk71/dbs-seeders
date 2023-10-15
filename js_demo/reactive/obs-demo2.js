import {Observable, filter,map,take} from 'rxjs';

const obs=new Observable((subscriber)=>{
for(let i=0;i<1000;i++){
setTimeout(()=>subscriber.next(10+i),2000);
}


})

const subs=obs.pipe(filter(x=>x%5==0),map(x=>x/5),take(20)).subscribe((data)=>{
    console.log(data);
})