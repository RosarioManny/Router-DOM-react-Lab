// Functions
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Components
import Navbar from "./components/Navbar";
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';

// CSS
import './App.css'
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const App = () => {
  const mailboxModel = {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  }
  const [mailbox, setMailboxes] = useState([])
  const addBox = (newAddedBox) => {
    newAddedBox._id = mailbox.length + 1;
    setMailboxes([...mailbox, newAddedBox]);
  }

  return (
    <>
    <h1>Welcome to USPS</h1>
    <Navbar />
      <Routes>
        <Route path='/' element={<h2>Post Office</h2>} />
        <Route path='/mailbox' element={<MailboxList mailbox={mailbox}/> } />
        <Route 
          path='/mailbox/new' 
          element={<MailboxForm addBox={addBox}/>} 
        />
        {/* <Route 
        path='/mailbox/:mailboxId'
        element={ <MailboxDetails mailbox={mailbox} />}
        /> */}
        <Route path='*' element={<h2>Oh NO! No available boxes</h2>} />
      </Routes>
    </>



  );
};

export default App;
{/* <MailboxForm addBox={addBox} /> */}