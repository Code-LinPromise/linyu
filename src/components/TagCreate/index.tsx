import { defineComponent, PropType } from 'vue';
import s from './style.module.scss';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../Icon';
import { Button } from '../Button';
export const TagCreate = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    return ()=>(
        <MainLayout>
            {{
                icon:()=><Icon name="left" class={s.icon}></Icon>,
                title:()=><span class={s.font}>新建标签</span>,
                default:()=> (
                    <form class={s.form}>
                      <div class={s.formRow}>
                        <label class={s.formLabel}>
                          <span class={s.formItem_name}>标签名</span>
                          <div class={s.formItem_value}>
                            <input  class={[s.formItem, s.input, s.error]}></input>
                          </div>
                          <div class={s.formItem_errorHint}>
                            <span>必填</span>
                          </div>
                        </label>
                      </div>
                      <div class={s.formRow}>
                        <label class={s.formLabel}>
                          <span class={s.formItem_name}>符号 </span>
                          <div class={s.formItem_value}>
                            
                          </div>
                          <div class={s.formItem_errorHint}>
                            <span>必填</span>
                          </div>
                        </label>
                      </div>
                      <p class={s.tips}>记账时长按标签即可进行编辑</p>
                      <div class={s.formRow}>
                        <div class={s.formItem_value}>
                          <Button class={[s.formItem, s.button]}>确定</Button>
                        </div>
                      </div>
                    </form>
                  )
            }}
        </MainLayout>
    )
}
})