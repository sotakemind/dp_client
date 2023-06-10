import { useActions } from "@/hooks/useActions"
import { useAuth } from "@/hooks/useAuth"
import { IEmailPassword } from "@/store/user/user.interface"
import Heading from "@/ui/Heading"
import Loader from "@/ui/Loader"
import Meta from "@/ui/Meta"
import Button from "@/ui/button/Button"
import Field from "@/ui/input/Field"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuthRedirect } from "./useAuthRedirect"
import { validEmail } from "./valid-email"



const Auth: FC = () => {
    useAuthRedirect()

    const {isLoading} = useAuth()

    const {login, register} = useActions()

    const [type, setType] = useState<'Авторизация' | 'Регистрация'> ('Авторизация')

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit:SubmitHandler<IEmailPassword> = (data) => {
        if (type == 'Авторизация') login(data)
        else  register(data)
        
        reset()
    }
    

    return (
            <Meta title='Авторизация'>
                
                <section className="flex h-screen bg-[url('/images/bg.jpg')]">
                    <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg bg-auth shadow-sm p-8 m-auto shadow-2xl'>
                        <Heading className="capitalize text-center mb-4">{type}</Heading>

                        {isLoading ? <Loader /> : <>

                        <Field {...formRegister('email',{
                            required: 'Небходим Email',
                            pattern: {
                                value: validEmail,
                                message: 'Не верный Email'
                            }
                        })}
                        placeholder='Email'
                        error = {errors.email?.message}
                        />
                        <Field {...formRegister('password',{
                            required: 'Необходим пароль',
                            minLength: {
                                value: 6,
                                message: 'Пароль слишком маленький'
                            }
                        })}
                        type='password'
                        placeholder='Password'
                        error = {errors.password?.message}
                        />
                        <Button type='submit' variant='blue'>Продолжить</Button>
                        <div>
                        <button type="button" className="inline-block opacity-20 mt-3 text-sm" onClick={() => setType(type === 'Авторизация' ? 'Регистрация' :'Авторизация' )}>{type === 'Авторизация' ? 'Регистрация' :'Авторизация'}</button>
                        </div>
                        </>
                        }
                    </form>
                </section>
            </Meta>
            )
}

export default Auth