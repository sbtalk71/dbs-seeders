import {Observable} from 'rxjs';

const obs=new Observable((subscriber)=>{
subscriber.next(100);
subscriber.next(200);
setTimeout(()=>subscriber.next(300),1000);
setTimeout(()=>subscriber.next(400),4000);

})

const subs=obs.subscribe((data)=>{
    console.log(data);
})