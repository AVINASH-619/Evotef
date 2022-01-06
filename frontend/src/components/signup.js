import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './sign.css';
const Signup = () => {
    const [person, setperson] = useState({ firstname: '', lastname: '',mobile:'',email: '', password: '' });
    let name,value;
    const history=useHistory()
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setperson({ ...person, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {firstname,lastname,mobile,email,password}=person
        const res= await fetch('/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({firstname,lastname,mobile,email,password})
        })
        const data= await res.json()
        if((res.status===404 || !data)||(!firstname || !lastname || !mobile || !email || !password)){
            alert('INVALID resgistration')
        }
        else{
            alert('Registration is Success')
            // history.push('/login')
        }

       
    };
    return (
        <div className='container'  style={{"  box-shadow": "5px 5px 5px 5px grey"}}>
            <article>
                <form method='POST'> 
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='firstname'>Firstname</label>
                        <input
                        className='w-100'
                            type='text'
                            id='firstname'
                            name='firstname'
                            value={person.firstname}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                            className='w-100'
                            type='text'
                            id='lastname'
                            name='lastname'
                            value={person.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='mobile'>Mobile</label>
                        <input
                        className='w-100'
                            type='number'
                            id='mobile'
                            name='mobile'
                            value={person.mobile}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='email'>Email</label>
                        <input
                        className='w-100'
                            type='email'
                            id='email'
                            name='email'
                            value={person.email}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='password'>Password</label>
                        <input
                            className='w-100'
                            type='password'
                            id='password'
                            name='password'
                            value={person.password}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                    <div className="col-sm-2 col-md-3 col-lg-4"></div>
                    <div className="col-sm-8 col-md-6 col-lg-5 p-3 text-center">
                    <button type='submit' className='btn btn-success text-white m-2' onClick={handleSubmit}>
                        CreateAccount
                    </button>
                    </div>
                    </div>
                </form>
            </article>
        </div>
    )
};

export default Signup;