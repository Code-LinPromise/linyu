import { defineComponent, PropType } from 'vue';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import s from './style.module.scss';
export const StatisticsPage = defineComponent({
    setup: (props, context) => {
      return () => (
        <TimeTabsLayout component={Charts} />
      )
    }
  })