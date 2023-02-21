export const throttle=(fn:Function,time:number)=>{
    let timer:number | undefined= undefined

    return (...arg:any[])=>{
        if(timer){
            return
        }
        else{
            fn(...arg)
            timer=setTimeout(()=>{
                timer=undefined
            },time)
        }
    }
}