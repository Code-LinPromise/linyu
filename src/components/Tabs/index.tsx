import { defineComponent, onUpdated, PropType } from 'vue';
import s from './style.module.scss';
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    classPrefix: {
      type: String
    },
    rerenderOnSelect: {
      type: Boolean as PropType<boolean>,
      default: false
    }
    
  },
  emits:['update:selected'],
  setup: (props, context) => {
    return () => {
      const tabs = context.slots.default?.();
      if (!tabs) return () => null;
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error("<Tabs> only accepts <Tab> as children");
        }
      }
      const cp = props.classPrefix
      return (
        <nav  class={[s.tabs, cp + '_tabs']}>
          <ol  class={[s.tabs_nav, cp + '_tabs_nav']}>
            {tabs.map((item, index) => {
              return (
                <li 
                class={[
                  item.props?.value === props.selected ? [s.selected, cp + '_selected'] : '',
                  cp + '_tabs_nav_item'
                ]}
                  onClick={() =>
                    context.emit("update:selected", item.props?.value)
                  }
                >
                  {item.props?.name}
                </li>
              );
            })}
          </ol>
          {props.rerenderOnSelect ?
            <div key={props.selected}>
              {tabs.find(item => item.props?.value === props.selected)}
            </div> :
            <div>
              {tabs.map(item =>
                <div v-show={item.props?.value === props.selected}>{item}</div>
              )}
            </div>
          }
        </nav>
      );
    };
  },
});


export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
        required:true
    },
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})