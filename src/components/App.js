import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { nanoid } from "nanoid";
import { add, remove } from '../redux/contactsSlice';
import { filterIn } from '../redux/filterSlice';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const addContact = (userData) => {
    let isExist = contacts.find((item) => item.name === userData.name)
    if (isExist) {
      return alert(`${userData.name} is already in contacts`);
    }
    const newUser = { ...userData, id: nanoid() };
    dispatch(add(newUser));    
  };

  const deleteContacts = (id) => {
    dispatch(remove(id))
  };
                                              //запись в state--filter значения input (event.target.value)
  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(filterIn(value))
  };

  const contactSeach = contacts.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      
      <h2>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
      <ContactList contactSeach={contactSeach} deleteContacts={deleteContacts} />
    </div>
  );

}
