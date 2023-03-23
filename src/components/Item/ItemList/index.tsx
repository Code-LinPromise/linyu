import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { Time } from '../../../hooks/Time';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tab, Tabs } from '../../Tabs';
import s from './style.module.scss';
import { Overlay } from 'vant';
import { ItemSummary } from '../ItemSummary';
import { Form, FormItem } from '../../Form';
import { OverlayIcon } from '../../Overlay';
export const ItemList = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
   setup: (props, context) => {
    const refSelected=ref("本月")
    const time = new Time()
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format()
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]
    
      const refOverlayVisible = ref(false)
      const onSubmitCustomTime = (e: Event) => {
        e.preventDefault()
        refOverlayVisible.value = false
      }
    return ()=>(
        <MainLayout>
            {{
                icon:()=><OverlayIcon />,
                title:()=><span class={s.font}>山竹记账</span>,
                default: () => (
                    <>
                        <Tabs v-model:selected={refSelected.value} onUpdate:selected={() => {
                            if (refSelected.value === '自定义时间') {
                                refOverlayVisible.value = true
                            }
                        }} classPrefix={'customTabs'}>
                            <Tab name='本月'>
                                <ItemSummary
                                    startDate={timeList[0].start.format()}
                                    endDate={timeList[0].end.format()} />
                            </Tab>
                            <Tab name='上月'>
                                <ItemSummary
                                    startDate={timeList[0].start.format()}
                                    endDate={timeList[0].end.format()} />
                            </Tab>
                            <Tab name='今年'>
                                <ItemSummary
                                    startDate={timeList[0].start.format()}
                                    endDate={timeList[0].end.format()} />
                            </Tab>
                            <Tab name='自定义时间' >
                                <ItemSummary
                                    startDate={customTime.start}
                                    endDate={customTime.end} />
                            </Tab>

                        </Tabs>
                        <Overlay show={refOverlayVisible.value} class={s.overlay} >
                            <div class={s.overlay_inner}>
                                <header>
                                    请选择时间
                                </header>
                                <main>
                                    <Form onSubmit={onSubmitCustomTime}>
                                        <FormItem label='开始时间' v-model={customTime.start} type='date' />
                                        <FormItem label='结束时间' v-model={customTime.end} type='date' />
                                        <FormItem>
                                            <div class={s.actions}>
                                                <button type="button" onClick={()=>refOverlayVisible.value = false}>取消</button>
                                                <button type="submit">确认</button>
                                            </div>
                                        </FormItem>
                                    </Form>
                                </main>
                            </div>
                        </Overlay>
                    </>
                )
            }}
        </MainLayout>  
    )
}
})