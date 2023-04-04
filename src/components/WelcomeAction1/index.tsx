import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { SkipFeatures } from '../SkipFeatures';
import s from "../WelcomeLayout/style.module.scss"
export const WelcomeAction1 = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.action}>
        <SkipFeatures class={s.fake}/>
        <RouterLink to="/welcome/2">下一页</RouterLink>
        <SkipFeatures />
      </div>
    );
  }
})