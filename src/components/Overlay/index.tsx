import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { useMeStore } from '../../stores/useMeStore';
export const Overlay = defineComponent({
  props: {
    close:{
        type:Function as PropType<(e:MouseEvent)=> void>,
        require:true
    }
    
  },
  setup: (props, context) => {
    const meStore = useMeStore()
    const route = useRoute()
    const router =useRouter()
    const user = ref<User>()
    onMounted(async () => {
      const response = await meStore.mePromise
      user.value = response?.data.resource
    })
    const onSignOut = async () => {
      await Dialog.confirm({
        title: '确认',
        message: '你真的要退出登录吗？',
      })
      localStorage.removeItem('jwt')
      router.push('sign_in')
    }
    return () => (
      <>
        <div class={s.mask} onClick={props.close}></div>   
        <div class={s.wrapper}>
        <section class={s.currentUser}>
            {user.value ? (
              <div>
                <h2 class={s.email}>{user.value.email}</h2>
                <p onClick={onSignOut}>点击这里退出登录</p>
              </div>
            ) : (
              <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
                <h2>未登录用户</h2>
                <p>点击这里登录</p>
              </RouterLink>
            )}
          </section>

          <menu class={s.action_list}>
              <li>
                <RouterLink to="/items/create" class={s.action}>
                  <Icon name="piggy" class={s.icon} />
                  <span class={s.font}>记账</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/items" class={s.action}>
                  <Icon name="chart" class={s.icon} />
                  <span class={s.font}>统计账单</span>
                </RouterLink>
              </li>
            <li>
              <RouterLink to="/statistics" class={s.action}>
                <Icon name="charts" class={s.icon}></Icon>
                <span class={s.font}>统计图表</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/export" class={s.action}>
                <Icon name="export" class={s.icon}></Icon>
                <span class={s.font}>导出数据</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notify" class={s.action}>
                <Icon name="classification" class={s.icon}></Icon>
                <span class={s.font}>自定义分类</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notify" class={s.action}>
                <Icon name="notify" class={s.icon}></Icon>
                <span class={s.font}>记账提醒</span>
              </RouterLink>
            </li>
          </menu>
        </div>
      </>
    );
  }
})



export const OverlayIcon = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return () => <>
      <Icon name="menu" class={s.icon} onClick={onClickMenu} />
      {refOverlayVisible.value &&
        <Overlay close={() => refOverlayVisible.value = false} />
      }
    </>

  }
})