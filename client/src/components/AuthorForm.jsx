import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default props => {
    const [name, setName] = useState(props);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {name})
            .then(res => console.log("Response: ", res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                alert("Invalid Entry! Author must have more than three characters!")
            })
            navigate('/')
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <p>
            <Link to = '/'>Home</Link>
        </p>
        <p>Add a new author:</p>
        <form onSubmit = {onSubmitHandler}>
            {errors.map((err, index) => <p key = {index}>{err}</p>)}
            <label>Name:</label><br></br>
            <input type = 'text' onChange = {e => setName(e.target.value)}></input>
            <button type='submit'>Submit</button>
            <Link to = '/'>
                <button>Cancel</button>
            </Link>
        </form>
    </div>
  )
}