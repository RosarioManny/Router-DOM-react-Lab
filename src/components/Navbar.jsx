import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mailbox'>Mailbox</Link>
                </li>
                <li>
                    <Link to='/mailbox/new'>New Mailbox</Link>
                </li>
                <li>
                    <Link to='/letter/new'>New Letter</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar