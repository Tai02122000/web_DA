import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { register } from './../Redux/Actions/UserActions.js';
import Loading from './../components/LoandingError/Loading.js';
import Message from './../components/LoandingError/Error.js';
import "./../css/login.css";
import logo from "./../image/logo.png";
    

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";


    const userRegister = useSelector((state) => state.userRegister)
    const {
        error,
        loading,
        userInfo
    } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }
  return (
    <>
       {/*  <div className='container d-flex flex-column justify-content-center'>

        { error && <Message variant='alert-danger'>{error}</Message>}
        {loading && <Loading />}

            <form className = 'Login col-md-8 col-lg-4 col-11'
            onSubmit = {
                submitHandler
            } >
                <input type='text' placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Register</button>
                <p>
                    <Link to = { redirect ? `/login?redirect=${redirect}` : "/register" }>
                        I have Accoutn <strong>Login</strong>
                    </Link>
                </p>
            </form>
        </div> 
        */}
        <div className='login'>
            <div className='signin-header'>
                <div className='row align-items-center'>
                    <div className='col-sm-4'>
                    <a>
                        <Link></Link>
                        <img src={logo} alt="logo" />
                    </a>
                    </div>
                    <div className='col-sm-8'>
                    <div className='signin-header-btn'>
                        <p>Not a member?</p>
                        <button className='axil-btn btn-bg-secondary sign-up-btn'>
                        Sign In
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className='col-xl-4 col-lg-6'>
                <div className='signin-banner bg_image bg_image--9'>
                <h3 className='title'>We offer the Best Products</h3>
                </div>
            </div>
            <div className='col-lg-6 offset-xl-2'>
                <div className='signin-form-wrap'>
                <div className='signin-form'>
                    <h3 className='title'>I'm New Here.</h3>
                    <p className='b2 mb--55'>Enter your detail below</p>

                    <form className = 'Login col-md-8 col-lg-4 col-11 login1' onSubmit={submitHandler}>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input className='form-control' placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='form-group d-flex align-items-center justify-content-between'>
                        <button type='submit' className='axil-btn btn-bg-primary submit-btn'>
                        Create Account
                        </button>
                        <p>
                            <Link to = { redirect ? `/login?redirect=${redirect}` : "/register" }>
                                I have Accoutn <strong>Login</strong>
                            </Link>
                        </p>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Register
