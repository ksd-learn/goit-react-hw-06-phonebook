import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm  />
      
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
