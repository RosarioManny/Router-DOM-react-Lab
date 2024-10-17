import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Base model
const initialState = {
    boxholder: '',
    boxsize: '',
};

function MailboxForm(props) {

    // Uses the initialState and holds form information
    const [formData, setFormData] = useState(initialState);

    // Navigate function
    const navigate = useNavigate();

    // Saved input and  redirects once submited
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailbox')
    };

    // Handles updates within the input fields 
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>Create New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label forHTML="boxholder">Boxholder:</label>
                <input
                name="boxholder"
                id="boxholder"
                onChange={handleChange}
                value={formData.boxholder}
                />
                <label forHTML="boxsize">Box Size:</label>
                <select
                type="select"
                name="boxsize"
                id="boxsize"
                value={formData.boxsize}
                // form 
                onChange={handleChange}
                >
                    <option value="X-Small">X-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm