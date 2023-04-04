import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { SkipFeatures } from '../SkipFeatures';
import s from "../WelcomeLayout/style.module.scss"
export const WelcomeAction4 = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.action}>
        <SkipFeatures class={s.fake}/>
        <RouterLink to="/start">开启应用</RouterLink>
        <SkipFeatures class={s.fake}/>
      </div>
    );
  }
})