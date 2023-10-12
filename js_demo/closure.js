
var closureFn=function(name){

    let greet='Welcome ';
                return function(){
                    return greet+ name;
                }
            }


var myfn=closureFn('Jordan');

console.log(myfn())

