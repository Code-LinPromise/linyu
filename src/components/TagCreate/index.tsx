import { defineComponent, PropType ,reactive} from 'vue';
import s from "../TagForm/style.module.scss";
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { EmojiSelect } from '../emojiSelect';
import { Rules, validate } from '../../shared/validata';
import { TagForm } from '../TagForm';
export const TagCreate = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const onSubmit = (e: Event) => {
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必填' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
        { key: 'sign', type: 'required', message: '必填' },
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined
      })
      Object.assign(errors, validate(formData, rules))
      e.preventDefault()
    }
    return () => (
      <MainLayout>{{
        title: () => <span class={s.font}>新建标签</span>,
        icon: () => <Icon name="left" onClick={() => { }}  class={s.icon}/>,
        default: () => (
          <TagForm />
        )
      }}</MainLayout>
    )
  }
})