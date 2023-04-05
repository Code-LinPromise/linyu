import { defineComponent, PropType ,reactive} from 'vue';
import s from "../TagForm/style.module.scss";
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Rules, validate } from '../../shared/validata';
import { TagForm } from '../TagForm';
import { BackIcon } from '../BackIcon';
import { useRoute } from 'vue-router';
export const TagEdit = defineComponent({
  setup: (props, context) => {
    const route = useRoute()
    const numberId = parseInt(route.params.id!.toString())
    if(Number.isNaN(numberId)){
      return ()=> <div>id 不存在</div>
    }
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
        title: () => <span class={s.font}>编辑标签</span>,
        icon: () => <BackIcon class={s.icon}/>,
        default: () => <>
          <TagForm id={numberId}/>
          <div class={s.actions}>
            <Button level='danger' class={s.removeTags} onClick={() => { }}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
          </div>
        </>
      }}</MainLayout>
    )
  }
})