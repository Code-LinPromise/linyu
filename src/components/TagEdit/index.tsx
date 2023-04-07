import { defineComponent, PropType ,reactive} from 'vue';
import s from "../TagForm/style.module.scss";
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Rules, validate } from '../../shared/validata';
import { TagForm } from '../TagForm';
import { BackIcon } from '../BackIcon';
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { http } from '../../shared/Http';
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
    const router = useRouter()
    const onError = ()=>{
      Dialog.alert({ title:'提示',message:'删除失败' })
    }
    const onDelete = async (options?: {withItems?: boolean})=>{
      await Dialog.confirm({
        title:'确认',
        message:'你真的要删除吗？'
      })
      await http.delete(`/tags/${numberId}`, {
        with_items: options?.withItems ? 'true' : 'false'
      },{ _autoLoading: true}).catch(onError)
      router.back()
    }
    return () => (
      <MainLayout>{{
        title: () => <span class={s.font}>编辑标签</span>,
        icon: () => <BackIcon class={s.icon}/>,
        default: () => <>
          <TagForm id={numberId}/>
          <div class={s.actions}>
            <Button level='danger' class={s.removeTags}
                onClick={()=>onDelete()}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems}
              onClick={()=>onDelete({withItems: true})}>删除标签和记账</Button>
          </div>
        </>
      }}</MainLayout>
    )
  }
})