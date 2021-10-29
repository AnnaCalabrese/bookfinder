import React, { useState } from "react";
import Button from "./Button"
import Axios from "axios"
import _ from "lodash"
import { Link } from "react-router-dom"

function Input(){
    
    /////////////////////// FETCH DATA /////////////////////////////////

    const [bookTitle, setBookTitle] = useState('')
    const [result, setResult] = useState([])
    
    const handleSubmit = (e) =>{

        e.preventDefault()
         Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`).then(response=>{
           // <Get object={response} path={setResult(response.data.items)} /> ?
         const fetchData= _.get(response, setResult(response.data.items), 0)
        }).catch(err =>{
            console.log(err)
            alert("Oops, something went wrong, please try again")        
        })

    }


    /////////////////////// RETURN /////////////////////////////////

    return (
        <div>
            <form onSubmit={handleSubmit} className="input-container">
                <svg class="my-svg" width="24" height="24" color="blue" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                <input type="text" required value={bookTitle} onChange={(e)=> setBookTitle(e.target.value)} placeholder="Search book..." />
                <Button  text="Search" />
            </form>
            {
                result.map(book =>(
                <div key={book.id} className="book-grid">                    

                    <div  className="book-card"> 
                        <img src={book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : null} alt={book.volumeInfo.title} />
                        <div>  
                            <h2 className="book-title">{book && book.volumeInfo && book.volumeInfo.title ? book.volumeInfo.title : null}</h2>
                            <p >Authors: {book && book.volumeInfo.authors ? book.volumeInfo.authors[0] : null} {book && book.volumeInfo.authors ? book.volumeInfo.authors[1] : null} </p>
                            <p>{book && book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : null}</p>
                            <br/>    
                            <Link 
                            to={{ pathname: `/Book/${book.volumeInfo.title}`, state: { book: book.volumeInfo.title } }}  >
                            <Button text="View More">
                            </Button>
                            </Link>


                        </div>    

                    </div>
                </div>
            )) }
</div>
)

}


export default Input