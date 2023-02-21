import { computed, onMounted,Ref,ref } from "vue";

type Point={
    x:number,
    y:number
}
export const useSwipe=(element:Ref<HTMLElement | null>)=>{
    const start =ref<Point>()
    const end =ref<Point>()
    const swipeing=ref(false)

    const distance=computed(()=>{
        if(!start.value || !end.value){ return undefined}
        return{
            x:end.value.x-start.value.x,
            y:end.value.y-start.value.y
        }
    })

    const direction=computed(()=>{
        if(!swipeing.value){return ""}
        if(!distance.value){return ""}
        const { x , y } =distance.value
        if(Math.abs(x)>Math.abs(y)){
            return x>0? "right" : "left"
        }
        else{
            return y>0? "down" : "up"
        }
    })
    onMounted(()=>{
        element.value?.addEventListener("touchstart",e=>{
            start.value={
                x:e.touches[0].clientX,
                y:e.touches[0].clientY
            }
        })
        element.value?.addEventListener("touchmove",e=>{
            end.value={
                x:e.touches[0].clientX,
                y:e.touches[0].clientY
            }
            swipeing.value=true
        })
        element.value?.addEventListener("touchend",e=>{
        
            swipeing.value=false
        })
    })

    return {
        swipeing ,distance,direction 
    }
}