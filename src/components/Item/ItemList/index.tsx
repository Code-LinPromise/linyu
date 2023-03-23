import { defineComponent, PropType, reactive, ref } from 'vue';
import { Time } from '../../../hooks/Time';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tab, Tabs } from '../../Tabs';
import s from './style.module.scss';
import { ItemSummary } from '../ItemSummary';
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
    return ()=>(
        <MainLayout>
            {{
                icon:()=><Icon name="menu" class={s.icon}></Icon>,
                title:()=><span class={s.font}>山竹记账</span>,
                default: () => (
                    <Tabs v-model:selected={refSelected.value} classPrefix={'customTabs'}>
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
                        <Tab name='自定义时间'>
                            <ItemSummary
                                startDate={customTime.start}
                                endDate={customTime.end} />
                        </Tab>
                    </Tabs>
                )
            }}
        </MainLayout>  
    )
}
})