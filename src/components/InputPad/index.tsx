import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const InputPad = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    const buttonMap=[
        { text: '1', onClick: () => { } },
        { text: '2', onClick: () => {  } },
        { text: '3', onClick: () => {  } },
        { text: '4', onClick: () => {  } },
        { text: '5', onClick: () => {  } },
        { text: '6', onClick: () => {  } },
        { text: '7', onClick: () => {  } },
        { text: '8', onClick: () => {  } },
        { text: '9', onClick: () => {  } },
        { text: '.', onClick: () => {  } },
        { text: '0', onClick: () => {  } },
        { text: '清空', onClick: () => { }},
        { text: '提交', onClick: () => { } },
    ]
    return ()=>(
        <div class={s.wrapper}>
            <div class={s.timeAndAmount}>
                <span class={s.iconAndTime}>
                    <Icon name="date" class={s.dateIcon}></Icon>
                    <span class={s.time}>time</span>
                </span>
                <span class={s.amount}>0.00</span>
            </div>
            <div class={s.buttons}>
                {buttonMap.map((item,index)=>{
                    return <button onClick={item.onClick}>{item.text}</button>
                })}
            </div>

        </div>
    )
}
})