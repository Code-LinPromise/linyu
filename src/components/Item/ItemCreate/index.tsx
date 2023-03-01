import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../../layouts/MainLayout';
import { Icon } from '../../Icon';
import { Tabs, Tab } from '../../Tabs';
import s from './style.module.scss';
export const ItemCreate = defineComponent({

  
  setup: (props, context) => {
    
    const refKind = ref("收入")
    const onUpdateSelected = (name: string) => {
      refKind.value=name
    }
    return () => (
      <MainLayout>
        {{
          icon: () => <Icon name="left" class={s.menuIcon}></Icon>,
          title: () => <span class={s.menuFont}>记一笔</span>,
          default: () => (
              <Tabs v-model:selected={refKind.value}>
                <Tab name="收入">123</Tab>
                <Tab name="支出">1456</Tab>
              </Tabs>
          ),
        }}
      </MainLayout>
    )
  }
})