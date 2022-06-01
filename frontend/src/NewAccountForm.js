import { useState, useEffect } from 'react';
import './NewAccountForm.css';

function NewAccountForm() {
    const [status, setStatus] = useState({message: "Checking connection status..."});
    const [connection, setConnection] = useState(false);
    const [serverMsg, setServerMsg] = useState({server: "..."});
    
    const formInfo = {
        username: 'user123',
        password: 'securePassword'
    }
    
    const checkConnection = async () => {
            
        try {
            
            const res = await fetch('/createuser');
            console.log(res.ok);
            
            if (res.ok) setConnection(true);

            const data = await res.json();
            return data;

        } catch(err) {

            console.error(err);
            setConnection(false);  

        }
    }
    
    if (!connection) checkConnection().then(response => setStatus(response));
        
    const pushData = async () => {

        try {

            const send = await fetch('/createuser', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formInfo)
            });
            
            const data = await send.json();
            return data;

        } catch(err) {

            console.error(err);

        }

    }

    let submitData = () => {
        if (connection) pushData().then(res => setServerMsg(res));
    }

    return (
    
        <div>
            <p>{status.message}</p>
            <p>{`Server message: ${serverMsg.server}`}</p>
            <button onClick={submitData}>Push stored data</button>
        </div>
        
    );
}

export default NewAccountForm;