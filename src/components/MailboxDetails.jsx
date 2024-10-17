import { Link } from 'react-router-dom'
import { useParams} from 'react-router-dom'

function MailboxDetails(props) {

    // Grabs the _id within the url and assigns to variable
    const { mailboxId } = useParams();

    const selectBox = props.mailbox.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )

    return (
        <>
        <h2>{selectBox.boxholder}</h2>
        <dl>
            <dt>Box Size:</dt>
            <dd>{selectBox.boxsize}</dd>
        </dl>
        </>
    );
}

export default MailboxDetails