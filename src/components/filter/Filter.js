import { useDispatch } from 'react-redux';
import { SelectorFilter } from '../../redux/selectors/selectorContacts';
import { filterIn } from '../../redux/filterSlice';
import css from './Filter.module.css'

export const Filter = () => {
    
    const filter = SelectorFilter();
    const dispatch = useDispatch();

    const handleChangeFilter = ({ target: { value } }) => {
        dispatch(filterIn(value))
    };

    return (
        <label className={css.label}>
            <p>Find contacts by name</p>
            <input
                name="filter" type="text" value={filter} onChange={handleChangeFilter}
                placeholder="Search by name"
                required
            />
        </label>
    )
}
