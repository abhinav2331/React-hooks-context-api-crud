import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookEditModal from './BookEditModal';
import { Modal, Button } from 'react-bootstrap';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <li>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <div><a onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>X</a></div>
        <div><a onClick={handleShow}>Edit</a></div>
      </li>
      <BookEditModal show={show} book={book} handleClose={handleClose} handleShow={handleShow} />
    </>
  );
}

export default BookDetails;