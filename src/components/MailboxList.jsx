import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
        <>
        <h2>All Mailboxes</h2>
        <ul className='card'>
            {props.mailbox.map((currentbox) => (
                <Link key={currentbox._id} to={`/mailbox/${currentbox._id}`}>
                    <li>{currentbox.boxholder}</li>
                </Link>
            ))}
        </ul>
        </>
    );
};

export default MailboxList