import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                alert("Invalid Entry! Author must have three characters or more!")
            })
            navigate('/')
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <p>
            <Link to = '/'>Home</Link>
        </p>
        <p>Edit this author</p>
        <form onSubmit = {updateAuthor}>
            {errors.map((err, index) => <p key = {index}>{err}</p>)}
            <label>Name:</label><br></br>
            <input type = 'text' value = {name} onChange = {e => setName(e.target.value)}></input>
            <button type='submit'>Submit</button>
            <Link to = '/'>
                <button>Cancel</button>
            </Link>
        </form>
    </div>
  )
}

export default Update;