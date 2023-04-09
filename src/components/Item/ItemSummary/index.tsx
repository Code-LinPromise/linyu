import { defineComponent, onMounted, PropType, ref ,reactive, watch} from 'vue';
import s from "./style.module.scss"
import { FloatButton } from '../../FloatButton';
import { http } from '../../../shared/Http';
import { Button } from '../../Button';
import { Money } from '../../../shared/Money';
import { useAfterMe } from '../../../hooks/useAfterMe';
import { Datetime } from '../../../shared/DateTime';
import { useMeStore } from '../../../stores/useMeStore';
import { useItemStore } from '../../../stores/useItemStore';
import { Icon } from '../../Icon';
import { useRouter } from 'vue-router';
export const ItemSummary = defineComponent({
    props: {
      startDate: {
        type: String as PropType<string>,
        required: false
      },
      endDate: {
        type: String as PropType<string>,
        required: false
      }
    },
    setup: (props, context) => {
    const router =useRouter()
    const page = ref(0)
    const itemsBalance = reactive({
      expenses: 0, income: 0, balance: 0
    })
    const itemStore = useItemStore(['items', props.startDate, props.endDate])
    useAfterMe(() => itemStore.fetchItems(props.startDate, props.endDate))
    watch(()=>[props.startDate,props.endDate], ()=>{
      itemStore.$reset()
      itemStore.fetchItems(props.startDate, props.endDate)
    })
    watch(()=>[props.startDate,props.endDate], ()=>{
      Object.assign(itemsBalance, {
        expenses: 0,
        income: 0,
        balance: 0
      })
      fetchItemsBalance()
    })
    
    const fetchItemsBalance=(async ()=>{
      if(!props.startDate || !props.endDate){ return }
      const response = await http.get('/items/balance', {
        happen_after: props.startDate,
        happen_before: props.endDate,
      },{_mock: 'itemIndexBalance',})
      Object.assign(itemsBalance, response.data)
    })
    useAfterMe(fetchItemsBalance)
    return () =>!props.startDate || !props.endDate ? (
      <div>请先选择时间范围</div>
    ): (
      <div class={s.wrapper}>
        {itemStore.items && itemStore.items.length > 0 ? (
          <>
            <ul class={s.total}>
              <li>
                <span>收入</span>
                <Money value={itemsBalance.income} />
              </li>
              <li>
                <span>支出</span>
                <Money value={itemsBalance.expenses} />
              </li>
              <li>
                <span>净收入</span>
                <Money value={itemsBalance.balance} />
              </li>
            </ul>
            <ol class={s.list}>
              {itemStore.items.map((item) => (
                <li>
                  <div class={s.sign}>
                  <span>{item.tags && item.tags.length > 0 ? item.tags[0].sign : '💰'}</span>
                  </div>
                  <div class={s.text}>
                    <div class={s.tagAndAmount}>
                    <span class={s.tag}>{ item.tags && item.tags.length > 0 ? item.tags[0].name : '未分类'}</span>
                      <span class={s.amount}>￥<Money value={item.amount}/></span>
                    </div>
                    <div class={s.time}><Datetime value={item.happen_at}/></div>
                  </div>
                </li>
              ))}
            </ol>
            <div class={s.more}>
              {itemStore.hasMore ?
                <Button onClick={() => itemStore.fetchNextPage(props.startDate, props.endDate)}>加载更多</Button> :
                <span>没有更多</span>
              }
            </div>
          </>
        ) : (
          <div class={s.none}>
            <Icon name={"piggy"}></Icon>
            <span>记录为空</span>
            </div>
        )}
        <FloatButton goItemCreate={()=>{router.push('items/create')}} />
      </div>
    )
  },
})

