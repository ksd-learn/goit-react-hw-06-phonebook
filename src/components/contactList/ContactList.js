import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';
import { UserContact } from '../userContact/UserContact';
import css from './ContactList.module.css';

export const ContactList = () => {

    const contacts = useSelector((state) => state.contacts);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const deleteContacts = (id) => {
        dispatch(remove(id))
    };

    const contactSeach = contacts.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul> 
            {contactSeach.map(({name, number, id}) => {
                return (
                    <li className={css.user} key={id}>
                        <UserContact name={name} number={number} />
                        <button className={css.btn} onClick={() => {deleteContacts(id)}}>Delete</button>
                    </li>
                );
            })}
        </ul>
    )
}
