import { useState } from "react";
import { useDispatch } from 'react-redux';
import { SelectorContacts } from '../../redux/selectors/selectorContacts';
import { add } from '../../redux/contactsSlice';
import { nanoid } from "nanoid";
import css from './ContactForm.module.css';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setnumber] = useState('');
    const contacts = SelectorContacts();
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setnumber(value);
                break
            default:
        }
    };

    const handlSubmit = (event) => {
        event.preventDefault();
        addContact( name, number );
        setName("");
        setnumber("");
    };

    const addContact = (name, number) => {
        let isExist = contacts.find((item) => item.name === name)
        if (isExist) {
          return alert(`${name} is already in contacts`);
        }
        const newUser = { name, number, id: nanoid() };
        dispatch(add(newUser));    
    };

    return (
        <form className={css.addForm} onSubmit={handlSubmit}>
            <label className={css.label}>
                <p>Name</p>
                <input
                    name="name" type="text" value={name} onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>
                <p>Number</p>
                <input
                    name="number" type="tel" value={number} onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.btn} type="submit">Add contact</button>
        </form>
    )
};
