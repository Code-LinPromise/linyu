import { defineComponent, PropType } from 'vue'
import { Center } from '../../components/Center'
import s from './style.module.scss'
import { Icon } from '../../components/Icon'

export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="piggy" class={s.pig} />
        </Center>
        <p class={s.text}>敬请期待</p>
      </div>
    )
  }
})