import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid()
      }
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);

    case 'EDIT_BOOK':
      return state.map((item) => {
        if (item.id === action.book.id) {
          const updatedItem = {
            ...item,
            title: action.book.title,
            author: action.book.author
          }; 
          return updatedItem;
        } 
        return item;
      });
      // return [...state, {
      //   title: action.book.title,
      //   author: action.book.author,
      //   id: action.book.id
      // }]
      
    default:
      return state;
  }
} 