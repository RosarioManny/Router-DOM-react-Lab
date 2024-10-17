import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
        <>
        <h2>All Mailboxes</h2>
        <ul>
            {props.mailbox.map((curretbox) => (
                <Link key={curretbox._id} to='/mailbox'>
                    <li>{currentbox.boxholder}</li>
                </Link>
            ))}

        </ul>
        </>

    );
};

export default MailboxList