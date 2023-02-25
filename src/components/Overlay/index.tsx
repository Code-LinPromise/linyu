import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon';
import s from './style.module.scss';
export const Overlay = defineComponent({
  props: {
    close:{
        type:Function as PropType<(e:MouseEvent)=> void>,
        require:true
    }
    
  },
  setup: (props, context) => {
    return () => (
      <>
        <div class={s.mask} onClick={props.close}></div>    
        <div class={s.wrapper}>
          <nav>
            <h2>未登录用户</h2>
            <span>点击这里登录</span>
          </nav>

          <menu>
            <li>
              <Icon name="charts" class={s.icon}></Icon>
              <span class={s.font}>统计图表</span>
            </li>
            <li>
              <Icon name="export" class={s.icon}></Icon>
              <span class={s.font}>导出数据</span>
            </li>
            <li>
              <Icon name="classification" class={s.icon}></Icon>
              <span class={s.font}>自定义分类</span>
            </li>
            <li>
              <Icon name="notify" class={s.icon}></Icon>
              <span class={s.font}>记账提醒</span>
            </li>
          </menu>
        </div>
      </>
    );
  }
})