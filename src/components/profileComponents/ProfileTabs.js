import React , { useState, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Toast from './../LoandingError/Toast';
import Message from './../LoandingError/Error';
import Loading from '../LoandingError/Loading';
import { toast } from 'react-toastify';
import { updateProfile } from './../../Redux/Actions/UserActions';


const ProfileTabs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const toastId  = React.useRef(null);

    const ToastObject = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000
    }

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading } = userUpdateProfile;

    useEffect(() => {
        if(user)
        {
            setName(user.name);
            setEmail(user.email);
        }
    },[dispatch, user]);

    const submitHandler = (e) => {
        e.preventDefault();

        if(password !== confirmpassword)
        {
            if (!toast.isActive(toastId.current))
            {
                toastId.current = toast.error("Password does not match", ToastObject);
            }
        } else 
        {
            dispatch(updateProfile({id:user._id,name,email,password}))
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Profile Update", ToastObject);
            }
        }
    }

  return (
    <>
        <Toast />
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading /> }
        {updateLoading && <Loading /> }
        <form className='row form-container' onSubmit={submitHandler}>
            <div className='col-md-6'>
                <div className='form'>
                    <label for="account-fn">UserName</label>
                    <input className='form-control' type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>

            <div className='col-md-6'>
                <div className='form'>
                    <label for="account-email">Email Address</label>
                    <input className='form-control' type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>

            <div className='col-md-6'>
                <div className='form'>
                    <label for="account-pass">New Password</label>
                    <input className='form-control' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            <div className='col-md-6'>
                <div className='form'>
                    <label for="account-pass">Confirm Password</label>
                    <input className='form-control' type="password" required value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            </div>

            <button type='submit'>Update Profile</button>
        </form> 
    </>
  )
}

export default ProfileTabs
