import React from "react";
import Axios from "axios"
import Footer from "./Footer";
class Book extends React.Component{

    state ={
        activeBook: []
    }

    componentDidMount = () => {
        
        const titleSingleBook = this.props.location.state.book
         Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titleSingleBook}`).then(response=>{
         
         this.setState({activeBook: response.data.items[0]})
        }).catch(err =>{
            console.log(err)
            alert("Oops, something went wrong, please try again")        
        })
    }


////////////////////////////////////// RETURN ///////////////////////
render(){
    const book = this.state.activeBook;
    console.log(book)
    console.log(book.volumeInfo)
  return(
    <div>
    <h1 className="single-book-title">Is this what you're looking for?</h1>
    <div className="book-card"> 
        <img src={book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : null}  />
        <div className="book-info"> 
            <hr/>
            <br/>
            <h1>{book && book.volumeInfo && book.volumeInfo.title ? book.volumeInfo.title : null}</h1> 
            <h2>Authors: {book && book.volumeInfo && book.volumeInfo.authors ? book.volumeInfo.authors : null}</h2>
            <br/>
            <hr/>
            <br/>
            <h3>Find out more about this book here:</h3>
            <a href={book && book.volumeInfo && book.volumeInfo.previewLink ? book.volumeInfo.previewLink : null}><p>{book && book.volumeInfo && book.volumeInfo.previewLink ? book.volumeInfo.previewLink : null}</p></a>
            <br/>
            <p>Language: {book && book.volumeInfo && book.volumeInfo.language ? book.volumeInfo.language : null}</p>
            <p>Pages: {book && book.volumeInfo && book.volumeInfo.pageCount ? book.volumeInfo.pageCount : null}</p>
            <p>Category: {book && book.volumeInfo && book.volumeInfo.categories ? book.volumeInfo.categories : null}</p>

        </div>    
    </div>
    <Footer/>
</div>
 )  
} 
}

export default Book;

