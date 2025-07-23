
function add(a,b,c,d,e){
    return a+b+c+d+e;
}

function curryedAdd(func){
    return function curryedFucn(...args){
        //call the main function when we have all the args
        if(args.length >= func.length){
            return func(...args)
        }else{
            //make a args collector functin here 
            return function(...next){
                return curryedFucn(...args, ...next)
            }
        }
    }
}

const ans = curryedAdd(add)
console.log(ans(1)(2)(3)(4)(10))