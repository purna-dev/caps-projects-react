import React,{useState} from 'react'
import Reg_img from '../../assets/Reg_img.png'
import style from './Register.module.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate();

  let [iserror,setisrror] = useState({
    nameError:'Field is required',
    usernameError:'Field is required',
    emailError:'Field is required',
    mobileError:'Field is required',
    checkError:'Check this box if you want to proceed',
  })

  const [nameerror,setnameerror] = useState(false)
  const [usernameerror,setusernameerror] = useState(false)
  const [emailerror,setemailerror] = useState(false)
  const [mobileerror,setmobileerror] = useState(false)
  const [checkerror,setcheckerror] = useState(false)

  
  const [formdata,setformdata] = useState({
    name:'',
    username:'',
    email:'',
    mobile:'',
    check:false
  })
  
  const handalChange = (e)=>{
    console.log(e)
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  console.log(formdata)
  console.log(formdata.name.trim().length)

  const handleSubmit = (e)=>{
    e.preventDefault();
    let isvalid = true;
    if(!formdata.name.trim().length){
      isvalid = false;
      setnameerror(true)
    }
    if(!formdata.username.trim().length){
      isvalid = false;
      setusernameerror(true)
    }
    if(!formdata.email.trim().length){
      isvalid = false;
      setemailerror(true)
    }
    if(!formdata.mobile.trim().length){
      isvalid = false;
      setmobileerror(true)
    }
    if(!formdata.check){
      isvalid = false;
      setcheckerror(true)
    }
    if(isvalid){
      
      localStorage.setItem('username',JSON.stringify(formdata))
      navigate("/genre");

    }

  }


  return (
    <div className={style.register_h}>

        <div className={style.reg_left}>

        <img src={Reg_img}/>

        <h2>Discover new things on Superapp</h2>

        </div>

        <div className={style.reg_right}>

            <h1>Super app</h1>
            <p>Create your new account</p>

            <input type='text' name='name' onChange={handalChange}  placeholder='Name' required/>
            {nameerror?<span className={style.error}>{iserror.nameError}</span>:<></>}
            <input type='text' name='username' onChange={handalChange} placeholder='UserName' required/>
            {usernameerror?<span className={style.error}>{iserror.usernameError}</span>:<></>}

            <input type='email' name='email' onChange={handalChange} placeholder='Email' required/>
            {emailerror?<span className={style.error}>{iserror.emailError}</span>:<></>}

            <input type='number' name='mobile' onChange={handalChange} placeholder='Mobile' required/>
            {mobileerror?<span className={style.error}>{iserror.mobileError}</span>:<></>}


            <div className={style.check}>
            <input type='checkbox' name='check' onChange={(e)=>{
              console.log(e)
              setformdata({...formdata,[e.target.name]:e.target.checked})

            }} required/>
            <label>Share my registration data with Superapp</label><br></br>
            {checkerror?<span className={style.error}>{iserror.checkError}</span>:<></>}

            </div>
            <Button onClick={(e)=>handleSubmit(e)}/>
            

            <p className={style.terms}>By clicking on Sign up. you agree to Superapp <span> Terms and Conditions of Use</span></p>

            <p className={style.policy}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>

            
            



        </div>

    
    </div>
  )
}

export default Register