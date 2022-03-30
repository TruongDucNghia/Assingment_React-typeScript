import React from 'react'

type Props = {}

const Profile = (props: Props) => {
    return (
        <div>
            <main className="body__acc">
                <div className="body__acc__header">
                    <div className="body__acc__fist">
                        <div className="body__acc__title">
                            <div className="acc__title__fist active">
                                <p>Thông tin tài khoản</p>
                            </div>
                            <div className="acc__title__fist">
                                <p>Đơn hàng</p>
                            </div>
                            <div className="acc__title__text mt-3">
                                <p>Chào mừng bạn trở lại Trương Nghĩa</p>
                            </div>
                        </div>
                        <div className="body__acc__menu">
                            <div className="acc__show__menu">
                                <div className="show__menu__title">
                                    <p>Bảng Điều Khiển</p>
                                </div>
                                <div className="show__menu__icon">
                                    <i className="fa fa-angle-down" aria-hidden="true" />
                                </div>
                            </div>
                            <nav className="acc__allmenu">
                                <div className="acc__menu__item active">
                                    <a>Thông tin tài khoản</a>
                                </div>
                                <div className="acc__menu__item">
                                    <a>Đơn hàng</a>
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
                                    <p>Thông tin tài khoản của bạn</p>
                                </div>
                                <div className="acc__DH__content1">
                                    <div className="DH__title">
                                        <p>Đăng nhập xã hội: </p>
                                        <img src="./src/public/img/fb-logo-col.svg" />
                                    </div>
                                    <div className="DH__form">
                                        <form  method="POST" id="form_profile">
                                            <div className="DH__form1">
                                                <label >Họ và tên</label>
                                                <input type="text" name="fullname" />
                                            </div>
                                            {/* <div class="DH__form1">
                              <label for="">Tên hiển thị <i>* Để nhận xét và nhận xét sản phẩm.</i></label>
                              <input type="text" value="Trương Nghĩa">
                      
                          </div> */}
                                            <div className="DH__form1">
                                                <label>E-mail <i>* Nơi bạn nhận được thông tin đặt hàng.</i></label>
                                                <input type="email" name="email" disabled />
                                            </div>
                                            <div className="DH__form1">
                                                <label>Số điện thoại</label>
                                                <input type="text" name="phone"  />
                                            </div>
                                            <div className="DH__form1">
                                                <label>Ngày sinh</label>
                                                <input type="date" name="birthday" />
                                            </div>
                                            <div className="DH__form2">
                                                <label className="sex__text">Giới tính</label>
                                                <div className="DH__checkBox">
                                                    <div className="pretty p-default">
                                                        <input type="radio" id="nam" name="gender" defaultValue={0} />
                                                        <div className="state p-info">
                                                            <label htmlFor="">Nam</label>
                                                        </div>
                                                    </div>
                                                    <div className="pretty p-default">
                                                        <input defaultChecked type="radio" id="nu" name="gender" defaultValue={1} />
                                                        <div className="state p-info">
                                                            <label htmlFor="">Nữ</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="DH__submit">
                                                <button type="submit" name="btn_update">Lưu thông tin của tôi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="acc__donhang">
                                <div style={{display: 'flex', alignItems: 'baseline'}} id="changePass" className="acc__DH__title">
                                    <p>Thay đổi mật khẩu tài khoản</p> <i className="fa fa-chevron-down" aria-hidden="true" />
                                </div>
                                <div id="show" className="acc__DH__content1 show">
                                    <div className="DH__form">
                                        <form method="post" id="form_pass">
                                            <div className="DH__form1">
                                                <label>Mật khẩu cũ</label>
                                                <input name="password" type="password"  />
                                                <div className="text-danger" />
                                            </div>
                                            <div className="DH__form1">
                                                <label>Mật khẩu mới</label>
                                                <input name="password_new" type="password"  />
                                            </div>
                                            <div className="DH__form1">
                                                <label>Xác nhận mật khẩu</label>
                                                <input name="password_comfim" type="password" />
                                            </div>
                                            <div className="DH__submit">
                                                <button type="submit" name="btn_change_pass">Cập nhật mật khẩu</button>
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
                                    <p>Lịch sử đơn hàng</p>
                                </div>
                                <div className="acc__DH__content">
                                    <div className="DH__content__title">
                                        <p>Không tìm thấy đơn hàng</p>
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