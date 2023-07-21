import {useState, FC, ReactElement} from 'react';
import TextField from "@mui/material/TextField/TextField";
const SearchBar:FC = ():ReactElement => {
    const [input, setInput] = useState('');
    const handleChange = (e:any) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <TextField
                label='Search'
                fullWidth
                variant='outlined'
                value={input}
                onChange={handleChange}
            />
        </div>
    );
}
export default SearchBar;