import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from "../WelcomeLayout/style.module.scss"
export const WelcomeAction2 = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.action}>
        <RouterLink to="/welcome/2" class={s.fake}>
          跳过
        </RouterLink>
        <RouterLink to="/welcome/3">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink>
      </div>
    );
  }
})