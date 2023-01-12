import styled from 'styled-components'
export default styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.loginbg}) no-repeat center;
  background-size: cover;
  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 10;
    .login-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 950px;
      height: 500px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      box-shadow: 0px 0px 5px #777;
      .login-left {
        width: 475px;
        height: 500px;
        padding: 20px;
        background: #388fff;
        .logo img {
          width: 120px;
        }
        .left-qrcode {
          width: 200px;
          margin: 30px auto 0 auto;
          #qrcode {
            width: 200px;
            height: 200px;
            padding: 10px;
            background: #ffffff;
            img {
              width: 100% !important;
              height: 100% !important;
            }
          }
          .qrcode-text {
            text-align: center;
            color: white;
            line-height: 35px;
            margin-top: 10px;
          }
        }
        .quick-login {
          text-align: center;
          margin: 20px 0;
          color: #dddddd;
          position: relative;
          &::before {
            content: '';
            width: 80px;
            height: 1px;
            background: #dddddd;
            position: absolute;
            left: 100px;
            top: 50%;
          }
          &::after {
            content: '';
            width: 80px;
            height: 1px;
            background: #dddddd;
            position: absolute;
            right: 100px;
            top: 50%;
          }
        }
        .qq-wx-wb {
          width: 180px;
          height: 55px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          > div {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            font-size: 18px;
            text-align: center;
            line-height: 30px;
            background: #e5ffe1;
            img {
              width: 18px;
              height: 18px;
            }
          }
        }
      }
      .login-right {
        position: relative;
        width: 475px;
        height: 500px;
        background: url(${(props) => props.rightBg}) no-repeat center center;
        .login-form {
          padding: 10px 40px;
          width: 350px;
          height: 440px;
          background: #ffffff;
          box-shadow: 0 0 8px #cccccc;
          border-radius: 8px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          .nav {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
          }
          .nav-tabs {
            display: flex;
            justify-content: space-between;
            text-align: center;
            border-bottom: none;
            li {
              width: 40%;
              padding: 0px 0;
              font-size: 17px;
              font-weight: bold;
              cursor: pointer;
              &.actives {
                color: #388eff;
                border-bottom: 4px solid #388eff;
              }
              span {
                color: #333;
                display: block;
                height: 45px;
                line-height: 45px;
                &.activess {
                  color: #388eff !important;
                }
              }
            }
          }
          .tab-content {
            .fade {
              transition: opacity 0.2s linear;
            }
            .fade:not(.show) {
              opacity: 0;
            }
            > .tab-pane {
              display: none;
            }
            > .active {
              display: block;
            }
            .tab-main {
              position: relative;
              height: 360px;
              padding: 1px 0 0 0;
              .pwd-login {
                .login-user,
                .login-password {
                  width: 100%;
                  height: 40px;
                  border-bottom: 1px solid #666;
                  margin-top: 30px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  img {
                    width: 18px;
                    height: 18px;
                    color: #666;
                    margin-left: 5px;
                  }
                  input {
                    width: calc(100% - 30px);
                    height: 35px;
                    outline: none;
                    color: #666666;
                    border: 0;
                    padding: 0 5px;
                  }
                }
              }
              .captcha-login {
                .login-user {
                  width: 100%;
                  height: 40px;
                  border-bottom: 1px solid #666;
                  margin-top: 30px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  img {
                    width: 18px;
                    height: 18px;
                    color: #666;
                    margin-left: 5px;
                  }
                  input {
                    width: calc(100% - 30px);
                    height: 35px;
                    outline: none;
                    color: #666666;
                    border: 0;
                    padding: 0 5px;
                  }
                }
                .login-Verification {
                  width: 100%;
                  height: 40px;
                  margin-top: 30px;
                  padding-bottom: 10px;
                  border-bottom: 1px solid #666;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  input {
                    width: 130px;
                    height: 35px;
                    outline: none;
                    color: #666666;
                    border: none;
                  }
                  .btn {
                    display: inline-block;
                    font-weight: 400;
                    color: #212529;
                    text-align: center;
                    vertical-align: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    border-radius: 0.25rem;
                    transition: color 0.15s ease-in-out,
                      background-color 0.15s ease-in-out,
                      border-color 0.15s ease-in-out,
                      box-shadow 0.15s ease-in-out;
                  }
                  .btn-primary {
                    color: #fff;
                    padding: 5px 15px;
                    font-size: 14px;
                    border-radius: 20px;
                    background-color: #007bff;
                    border-color: #007bff;
                  }
                  button:not(:disabled),
                  [type='button']:not(:disabled),
                  [type='reset']:not(:disabled),
                  [type='submit']:not(:disabled) {
                    cursor: pointer;
                  }
                  .btn:not(:disabled):not(.disabled) {
                    cursor: pointer;
                  }
                }
              }
              .login-submit {
                width: 100%;
                height: 40px;
                margin-top: 30px;
                display: flex;
                align-items: center;
                .btn {
                  display: inline-block;
                  font-weight: 400;
                  color: #212529;
                  text-align: center;
                  vertical-align: middle;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                  background-color: transparent;
                  border: 1px solid transparent;
                  padding: 0.375rem 0.75rem;
                  font-size: 1rem;
                  line-height: 1.5;
                  border-radius: 0.25rem;
                  transition: color 0.15s ease-in-out,
                    background-color 0.15s ease-in-out,
                    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .btn-primary {
                  color: #fff;
                  width: 100%;
                  height: 35px;
                  outline: none;
                  border: none;
                  letter-spacing: 5px;
                  border-radius: 18px;
                  font-weight: bold;
                  margin-bottom: 5px;
                  background-color: #007bff;
                  border-color: #007bff;
                }
                button:not(:disabled),
                [type='button']:not(:disabled),
                [type='reset']:not(:disabled),
                [type='submit']:not(:disabled) {
                  cursor: pointer;
                }
                .btn:not(:disabled):not(.disabled) {
                  cursor: pointer;
                }
              }
              .login-text {
                width: 100%;
                margin-top: 30px;
                line-height: 2;
                color: #666;
                text-align: justify;
                a {
                  color: #388eff;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              .go-register {
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                a {
                  color: #388eff;
                }
                span {
                  position: relative;
                  padding-left: 10px;
                  &::before {
                    position: absolute;
                    top: 4px;
                    left: 0;
                    content: '';
                    height: 12px;
                    width: 2px;
                    background-color: #cccccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
