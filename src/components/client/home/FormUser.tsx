import React from 'react'

type Props = {}

const FormUser = (props: Props) => {
  return (
    <div>
        <div className="user-options">
              <div className="search-rp" />
              {/* khi đã đăng nhập thành công */}
              {/* <div class="profile pt-4 pb-4">
              <span class="title-pop-user">Hồ sơ<i class="fa fa-angle-down ml-2" aria-hidden="true"></i></span>
              <div class="pop-profile">
                  <a href="accountClient?action=viewProfileClient">Bảng điều khiển</a>

                  <a href="accountClient?action=logoutClient" onclick="return confirm('Bạn chắc chắn muốn đăng xuất')">Đăng xuất</a>
              </div>
          </div> */}
              {/* Khi chưa đăng nhập */}
              <div className="account pt-4 pb-4" id="popup-user" data-toggle="modal" data-target="#box-login-register">
                <span className="title-pop-user">Đăng nhập / Đăng ký</span>
                <span className="icon__account"><i className="fas fa-user-circle" /></span>
              </div>
              {/* pops up login */}
              <div className="modal fade " role="dialog" id="box-login-register" style={{ zIndex: 100 }}>
                <div className="modal-dialog">
                  <div className="modal-content box-content-user mt-5">
                    <div className="modal-header" style={{ border: 'none', paddingBottom: 0 }}>
                      <button type="button" className="close" data-dismiss="modal" style={{ outline: 'none' }}>×</button>
                    </div>
                    <div className="modal-body box-user">
                      <div className="title">
                        <span className="title-sign_in">Đăng nhập</span>
                        <span className="title-register">Đăng ký</span>
                      </div>
                      <div className="welcome">
                        Chào mừng bạn!
                      </div>
                      {/* mess form */}
                      {/* <div class="bg-danger"></div> */}
                      <form method="POST" name="form-login" className="p-5" id="login_user">
                        <div className="form-group">
                          <input type="text" name="email" placeholder="Nhập email" className=" email" id="email_login" required />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" placeholder="Nhập mật khẩu" className="password" id="password_login" />
                        </div>
                        <div className="pretty p-default mb-4 mt-4">
                          <input type="checkbox" id="remember" name="remember" />
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
                      {/* register */}
                      <form method="POST" encType="multipart/form-data" name="form-register" id="register_user" className="p-5">
                        <div className="errRegister" style={{ color: 'red' }}>
                        </div>
                        <div className="form-group">
                          <input type="text" name="fullname" id="fullname" placeholder="Tên đầy đủ" className="fullname" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="email" id="email_register" placeholder="Nhập email" className=" email" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" placeholder="Nhập mật khẩu" className=" password" id="pass_register" />
                        </div>
                        <div className="form-group">
                          <input type="date" name="birthday" id="birthday" placeholder="Ngày sinh của bạn" className="birthday" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="phone" id="phone" placeholder="Số điện thoại của bạn" className="phone" />
                        </div>
                        <div className="gender col-md-12 mb-4 mt-4">
                          <div className="form-check-inline">
                            <input className="form-check-input" defaultValue={0} id="gender" type="radio" name="gender" defaultChecked />
                            <label htmlFor="gender" className="form-check-label mr-4">
                              Nam
                            </label>
                            <input className="form-check-input" id="gender2" type="radio" name="gender" />
                            <label htmlFor="gender2" className="form-check-label">
                              Nữ
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="col-md-12 btn btn-secondary p-2" id="btn_register">Tạo tài khoản</button>
                        <div className="forgot-pass text-center m-3">
                          <p>Bạn chắc chắn rằng sẽ đồng ý với những điều khoản của chúng tôi!</p>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer" style={{ display: 'block' }}>
                    </div>
                  </div>
                </div>
              </div>
              {/* end modal login*/}
              <a href="#lang" className="lang pt-4 pb-4">
                <img src="./src/public/img/vietnam.png"  />
              </a>
              <div className="box-favorite-pro pt-4 pb-4">
                <a className="favorite-pro">
                  <i className="fa fa-heart" aria-hidden="true" />
                </a>
                <div className="notifi">
                  0
                </div>
              </div>
              <div className="box-cart pt-4 pb-4">
                <a href="cartClient" className="cart">
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                </a>
                <div className="notifi">
                  0
                </div>
                {/* start popup-cart */}
                {/* hover hiển thị thông in giỏ hàng */}
              </div>
            </div>
    </div>
  )
}

export default FormUser