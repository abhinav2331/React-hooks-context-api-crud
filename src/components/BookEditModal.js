import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';


const BookEditModal = (props) => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState(props.book.title);
    const [author, setAuthor] = useState(props.book.author);
    const [id, setId] = useState(props.book.id);    

    const handleSubmit = (e) => {        
        e.preventDefault();
        dispatch({ type: 'EDIT_BOOK', book: { title, author, id } });
        setTitle('');
        setAuthor('');
        props.handleClose();
    }
    const closeModal = () => {
        setTitle(props.book.title);
        setAuthor(props.book.author);
        props.handleClose();
    }
    return (
        <>
            <Modal show={props.show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.book.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="book title" value={title}
                            onChange={(e) => setTitle(e.target.value)} required />
                        <input type="text" placeholder="author name" value={author}
                            onChange={(e) => setAuthor(e.target.value)} required />
                        <Button type="submit">Update Book</Button>
                    </form>
                </Modal.Body>                
            </Modal>
        </>
    );
}

export default BookEditModal;