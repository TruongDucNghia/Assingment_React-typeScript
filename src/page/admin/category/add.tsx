import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CategoryType } from '../../../types/category'
import {useForm, SubmitHandler} from 'react-hook-form'
type AddcateProps = {
    onAdd: (data: CategoryType) => void
}
type FormInput = {
    name: string,
    img: string
}
const Addcate = (props: AddcateProps) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormInput>()
    const navigate = useNavigate()
    const onSubmit : SubmitHandler<FormInput> = (data) =>{
        props.onAdd(data)
        navigate('/admin/category/list')
    }
    return (
        <div>
            <h2>Form add category</h2>
            <NavLink to='/admin/category/list'>
            <button type="button" className="btn btn-success btn-secondary">List category</button>
            </NavLink>
            <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input {...register('name', {required: true, maxLength: 50})} type="name" className="form-control p-input" placeholder="Enter name" />
                    <p style={{color: 'red'}}>{errors.name?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{color: 'red'}}>{errors.name?.type === 'maxLength' && "Bạn không được nhập quá 50 ký tự"}</p>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input {...register('img', {required: true, pattern:{
                        value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                        message: "Bạn phải nhập đúng địa chỉ cdn của ảnh"
                    }})} type="text" className="form-control p-input" placeholder="Address img" />
                    <p style={{color: 'red'}}>{errors.img?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{color: 'red'}}>{errors.img?.message}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Addcate