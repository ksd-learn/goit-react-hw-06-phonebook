import { useSelector } from 'react-redux';

export const SelectorContacts = () => {
    const contacts = useSelector((state) => state.contacts);
    return contacts
}

export const SelectorFilter = () => {
    const filter = useSelector((state) => state.filter);
    return filter
}
