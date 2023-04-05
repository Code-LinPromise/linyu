import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { SkipFeatures } from '../SkipFeatures';
import s from "../WelcomeLayout/style.module.scss"
export const WelcomeAction4 = defineComponent({
  
  setup: (props, context) => {
  const onClick = () => {
    localStorage.setItem('skipFeatures', 'yes')
  }
    return () => (
      <div class={s.action}>
        <SkipFeatures class={s.fake}/>
        <span onClick={onClick}><RouterLink to="/start">开启应用</RouterLink></span>
        <SkipFeatures class={s.fake}/>
      </div>
    );
  }
})