import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryType } from '../../../types/category'

type ListCateProps = {
    category: CategoryType[]
}

const Listcate = (props: ListCateProps) => {
    return (
        <div>
            <h1>List category</h1>
            <NavLink to='/admin/category/add'>
            <button type="button" className="btn btn-success">Add category</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {props.category.map((item, index) => <tr>
                        <td scope="row">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.img} alt="" width='200px'/>
                        </td>
                    </tr>)}
                    
                    
                </tbody>
            </table>

        </div>
    )
}

export default Listcate