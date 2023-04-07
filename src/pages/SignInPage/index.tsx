import { Form } from '../../components/Form';
import { Button } from '../../components/Button';
import { defineComponent, PropType, reactive, ref } from 'vue';
import { FormItem } from '../../components/Form';
import { Icon } from '../../components/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import { hasError,validate } from '../../shared/validata';
import { useRoute, useRouter } from 'vue-router';
import { http } from '../../shared/Http';
import { refreshMe } from '../../shared/me';
import { useBool } from '../../shared/useBool';
import s from './style.module.scss';
import { useMeStore } from '../../stores/useMeStore';
import { BackIcon } from '../../components/BackIcon';
export const SignInPage = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
        setup: (props, context) => {
        const formData = reactive({
          email: '326661445@qq.com',
          code: ''
        })
        const errors = reactive({
          email: [],
          code: []
        })
        const refValidationCode = ref<any>()
        const router = useRouter()
        const route = useRoute()
        const meStore = useMeStore()
        const { ref: refDisabled, toggle, on: disabled, off: enable } = useBool(false)
        const onSubmit = async (e: Event) => {
          e.preventDefault()
          Object.assign(errors, {
            email: [], code: []
          })
          Object.assign(errors, validate(formData, [
            { key: 'email', type: 'required', message: '必填' },
            { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
            { key: 'code', type: 'required', message: '必填' },
          ]))
          if(!hasError(errors)){
            const response = await http.post<{jwt:string}>('/session', formData)
            localStorage.setItem('jwt', response.data.jwt)
            const returnTo = route.query.return_to?.toString()
            meStore.refreshMe()
            router.push(returnTo || '/')
          }
        }
        const onError=(error:any)=>{
          if(error.response.status===422){
            Object.assign(errors,error.response.data.errors)
          }
        }
        const onClickSendValidationCode=async()=>{
          disabled()
          const response=await http.post('/validation_codes',{email:formData.email},{_autoLoading: true})
          .catch(onError)
          .finally(enable)
          console.log(response)
          refValidationCode.value.startCount()
        }
        return () => (
          <MainLayout>{
            {
              title: () => <span class={s.font}>登录</span>,
              icon: () => <BackIcon  class={s.icon}/>,
              default: () => (
                <div class={s.wrapper}>
                  <div class={s.logo}>
                    <Icon class={s.icon} name="mangosteen" />
                    <h1 class={s.appName}>山竹记账</h1>
                  </div>
                  <Form onSubmit={onSubmit}>
                    <FormItem label="邮箱地址" type="text"
                      placeholder='请输入邮箱，然后点击发送验证码'
                      v-model={formData.email} error={errors.email?.[0]} />
                    <FormItem label="验证码" type="validationCode"
                      ref={refValidationCode}
                      countFrom={1}
                      disabled={refDisabled.value}
                      placeholder='请输入六位数字' onClick={onClickSendValidationCode}
                      v-model={formData.code} error={errors.code?.[0]} />
                    <FormItem style={{ paddingTop: '96px' }}>
                      <Button type={"submit"}>登录</Button>
                    </FormItem>
                  </Form>
                </div>
              )
            }
          }</MainLayout>
        )
      }
})