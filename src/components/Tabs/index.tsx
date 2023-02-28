import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
export const Tabs = defineComponent({
    props:{
        selected:{
            type:String as PropType<string>,
            required:true
        },
        onUpdateSelected:{
            type:Function as PropType<(selected:string)=>void>,
            required:true
        }
    },
  setup: (props, context) => {
    return ()=>{

    const tabs =context.slots.default?.()
    console.log(props.selected)
    if(!tabs)return ()=> null
    for(let i=0; i<tabs.length;i++){
        if(tabs[i].type!==Tab){
            throw new Error("<Tabs> only accepts <Tab> as children")
        }
    }
    return (
        <nav>
          <ol>
            {tabs.map((item, index) => {
              return <li class={ item.props?.name===props.selected ? s.selected: ""} 
              onClick={()=>props.onUpdateSelected?.(item.props?.name)}
              >{item.props?.name}</li>;
            })}
          </ol>
        </nav>
      );
    }
   
  }
})


export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
        required:true
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})