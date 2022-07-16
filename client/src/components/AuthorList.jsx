import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'

const AuthorList = (props) => {
    const {removeFromDom} = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err));
    }

  return (
    <div>
            <table>
                    <tr className='smaller'>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
        {props.authors.map((author, idx) => {
            return <div key = {idx}>
                    <tr>
                        <td className='bigger'>
                            {author.name}
                        </td>
                        <td>
                            <Link to = {`/edit/${author._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick = {(e) => {deleteAuthor(author._id)}}>Delete</button>
                        </td>
                    </tr>
                    </div>
            })}
            </table>
    </div>
  )
}

export default AuthorList;