import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from '../../redux/selectors/selectorState';
import { filterIn } from '../../redux/slices/filterSlice';
import css from './Filter.module.css'

export const Filter = () => {
    
    const filter = useSelector(selectorFilter);
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
