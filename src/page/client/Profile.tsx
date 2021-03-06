import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
type Props = {}
type FormInput = {
    username: string,
    email: string
    birthday: string,
    phone: string,
    gender: string
}
const Profile = (props: Props) => {
    const {register, handleSubmit, formState, reset} = useForm<FormInput>()
    const isUser = JSON.parse(localStorage.getItem('user') as string)
    reset(isUser.user)
    useEffect(() =>{
        const me = document.querySelector('#changePass');
        const show = document.querySelector('#show')
        me?.addEventListener('click', () =>{
            show?.classList.toggle('show')
        })
        // end
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
    
        const tabs = $$('.acc__menu__item');
        const panes = $$('.acc__tab__menu');
        const titles = $$('.acc__title__fist')
        const line = $('.acc__line');
        const tabActive = $('.acc__menu__item.active')
    
        // line.style.left = tabActive.offsetLeft + 'px'
        // line.style.width = tabActive.offsetWidth + 'px'
    
        tabs.forEach((tab, index) => {
            const pane = panes[index]
            const title = titles[index]
            tab.addEventListener('click', (e) =>{
              e.preventDefault();
              $('.acc__menu__item.active')?.classList.remove('active');
              $('.acc__tab__menu.active')?.classList.remove('active');
              $('.acc__title__fist.active')?.classList.remove('active');
              // line.style.left = this.offsetLeft + 'px'
              // line.style.width = this.offsetWidth + 'px'
              tab.classList.add('active')
              pane.classList.add('active')
              title.classList.add('active')
            })
            
        })   
      }, [])
      
    return (
        <div>
            <main className="body__acc">
                <div className="body__acc__header">
                    <div className="body__acc__fist">
                        <div className="body__acc__title">
                            <div className="acc__title__fist active">
                                <p>Th??ng tin t??i kho???n</p>
                            </div>
                            <div className="acc__title__fist">
                                <p>????n h??ng</p>
                            </div>
                            <div className="acc__title__text mt-3">
                                <p>Ch??o m???ng b???n tr??? l???i Tr????ng Ngh??a</p>
                            </div>
                        </div>
                        <div className="body__acc__menu">
                            <div className="acc__show__menu">
                                <div className="show__menu__title">
                                    <p>B???ng ??i???u Khi???n</p>
                                </div>
                                <div className="show__menu__icon">
                                    <i className="fa fa-angle-down" aria-hidden="true" />
                                </div>
                            </div>
                            <nav className="acc__allmenu">
                                <div className="acc__menu__item active">
                                    <a>Th??ng tin t??i kho???n</a>
                                </div>
                                <div className="acc__menu__item">
                                    <a>????n h??ng</a>
                                </div>
                                <div className="acc__line" style={{ left: 0, width: 136 }} />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="body__acc__content">
                    <div className="acc__tab__menu active">
                        <div className="acc__menu__content">
                            <div className="acc__donhang">
                                <div className="acc__DH__title">
                                    <p>Th??ng tin t??i kho???n c???a b???n</p>
                                </div>
                                <div className="acc__DH__content1">
                                    <div className="DH__title">
                                        <p>????ng nh???p x?? h???i: </p>
                                        <img src="./src/public/img/fb-logo-col.svg" />
                                    </div>
                                    <div className="DH__form">
                                        <form  method="POST" id="form_profile">
                                            <div className="DH__form1">
                                                <label >H??? v?? t??n</label>
                                                <input {...register('username')} type="text" name="fullname" />
                                            </div>
                                            {/* <div class="DH__form1">
                              <label for="">T??n hi???n th??? <i>* ????? nh???n x??t v?? nh???n x??t s???n ph???m.</i></label>
                              <input type="text" value="Tr????ng Ngh??a">
                      
                          </div> */}
                                            <div className="DH__form1">
                                                <label>E-mail <i>* N??i b???n nh???n ???????c th??ng tin ?????t h??ng.</i></label>
                                                <input {...register('email')} type="email" name="email" disabled />
                                            </div>
                                            <div className="DH__form1">
                                                <label>S??? ??i???n tho???i</label>
                                                <input {...register('phone')} type="text" name="phone"  />
                                            </div>
                                            <div className="DH__form1">
                                                <label>Ng??y sinh</label>
                                                <input {...register('birthday')} type="date" name="birthday" />
                                            </div>
                                            <div className="DH__form2">
                                                <label className="sex__text">Gi???i t??nh</label>
                                                <div className="DH__checkBox">
                                                    <div className="pretty p-default">
                                                        <input  type="radio" id="nam" name="gender" />
                                                        <div className="state p-info">
                                                            <label htmlFor="">Nam</label>
                                                        </div>
                                                    </div>
                                                    <div className="pretty p-default">
                                                        <input type="radio" id="nu" name="gender" />
                                                        <div className="state p-info">
                                                            <label htmlFor="">N???</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="DH__submit">
                                                <button type="submit" name="btn_update">L??u th??ng tin c???a t??i</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="acc__donhang">
                                <div style={{display: 'flex', alignItems: 'baseline'}} id="changePass" className="acc__DH__title">
                                    <p>Thay ?????i m???t kh???u t??i kho???n</p> <i className="fa fa-chevron-down" aria-hidden="true" />
                                </div>
                                <div id="show" className="acc__DH__content1 show">
                                    <div className="DH__form">
                                        <form method="post" id="form_pass">
                                            <div className="DH__form1">
                                                <label>M???t kh???u c??</label>
                                                <input name="password" type="password"  />
                                                <div className="text-danger" />
                                            </div>
                                            <div className="DH__form1">
                                                <label>M???t kh???u m???i</label>
                                                <input name="password_new" type="password"  />
                                            </div>
                                            <div className="DH__form1">
                                                <label>X??c nh???n m???t kh???u</label>
                                                <input name="password_comfim" type="password" />
                                            </div>
                                            <div className="DH__submit">
                                                <button type="submit" name="btn_change_pass">C???p nh???t m???t kh???u</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="acc__tab__menu">
                        <div className="acc__menu__content">
                            <div className="acc__donhang">
                                <div className="acc__DH__title">
                                    <p>L???ch s??? ????n h??ng</p>
                                </div>
                                <div className="acc__DH__content">
                                    <div className="DH__content__title">
                                        <p>Kh??ng t??m th???y ????n h??ng</p>
                                    </div>
                                    <div className="DH__content__body">
                                        <img src="./src/public/img/empty-orders.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Profile