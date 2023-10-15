import {Observable, filter,map,take,interval} from 'rxjs';

const obs=interval(100);


const subs=obs.pipe(filter(x=>x%5==0),map(x=>x/5)).subscribe((data)=>{
    console.log(data);
})