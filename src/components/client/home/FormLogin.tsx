import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../api/auth'
import { UserType } from '../../../types/user'
type Props = {}
type FormInputLogin = {
    email: string,
    password: string
}
const FormLogin = (props: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormInputLogin>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputLogin> = async (data: UserType) =>{
        try {
            const response = await login(data)
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/profile')
        } catch (error) {
            console.log(error);         
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} name="form-login" className="p-5" id="login_user">
                <div className="form-group">
                    <input {...register('email')} type="text" name="email" placeholder="Nhập email" className=" email" id="email_login" required />
                </div>
                <div className="form-group">
                    <input {...register('password')} type="password" name="password" placeholder="Nhập mật khẩu" className="password" id="password_login" />
                </div>
                <div className="pretty p-default mb-4 mt-4">
                    <input checked type="checkbox" id="remember" name="remember" />
                    <div className="state">
                        <label>Nhớ thông tin</label>
                    </div>
                </div>
                <div className="errLogin text-danger pb-2">
                </div>
                <button type="submit" className="col-md-12 btn btn-secondary p-2" id="btn_login_client">Đăng
                    nhập</button>
                <div className="forgot-pass text-center m-3">
                    <a href="forgotPass">Bạn quên mật khẩu?</a>
                </div>
                <div className="err" style={{ color: 'red' }}>
                </div>
            </form>
        </div>
    )
}

export default FormLogin