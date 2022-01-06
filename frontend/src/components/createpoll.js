import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './sign.css';
const  Createpoll = () => {
    const [election, setElection] = useState({ name: '', partyname: '',age:'',type: '',image:'',t:0});
    election.t=0;
    let Name,value;
    const history=useHistory()
    const handleChange = (e) => {
        Name = e.target.name;
        value = e.target.value;
        setElection({ ...election, [Name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,partyname,age,type,image,t}=election
        const res= await fetch('/election',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,partyname,age,type,image,t})
        })
        const data=res
        if(data.status===422 || !data){
            window.alert('INVALID resgistration')
        }
        else{
            window.alert('Registration is Success')
            history.push('/login')
        }

       
    };
    return (
        <div className='container'  style={{"  box-shadow": "5px 5px 5px 5px grey"}}>
            <article>
                <form method='POST'> 
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='name'>Name</label>
                        <input
                        className='w-100'
                            type='text'
                            id='name'
                            name='name'
                            value={election.name}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='partyname'>Partyname</label>
                        <input
                            className='w-100'
                            type='text'
                            id='partyname'
                            Name='partyname'
                            value={election.partyname}
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='age'>Age</label>
                        <input
                        className='w-100'
                            type='number'
                            id='age'
                            Name='age'
                            value={election.age}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='type'>Type</label>
                        <input
                        className='w-100'
                            type='type'
                            id='type'
                            Name='type'
                            value={election.type}
                            onChange={handleChange}
                        />
                        </div>
                    </div>

                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='image'>PartyLogo</label>
                        <input
                        className='w-100'
                            type='string'
                            id='image'
                            Name='image'
                            value={election.image}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                   
                    {/* <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='password'>Password</label>
                        <input
                            className='w-100'
                            type='password'
                            id='password'
                            Name='password'
                            value={election.password}
                            onChange={handleChange}
                        />
                        </div>
                    </div> */}
                    <div className='row'>
                    <div className="col-sm-2 col-md-3 col-lg-4"></div>
                    <div className="col-sm-8 col-md-6 col-lg-5 p-3 text-center">
                    <button type='submit' className='btn btn-success text-white m-2' onClick={handleSubmit}>
                        AddPerson
                    </button>
                    </div>
                    </div>
                </form>
            </article>
        </div>
    )
};

export default  Createpoll;