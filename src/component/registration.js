import {useState} from 'react';

function Registration(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [emailNotif, setEmailNotif] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const validate = () => {
        const validationErrors = [];
        if(!name) validationErrors.push('Please provide a name.')
        if(!email) validationErrors.push('Please provide a email.')
        if(!phoneNumber) validationErrors.push('Please provide a phone number.')
        return validationErrors;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if(errors.length > 0){
            return setValidationErrors(errors);
        }
        const registrationInfo = {
            name,
            email,
            phoneNumber,
            staff,
            bio,
            emailNotif,
            submitedOn: new Date(),
        };

        setName('')
        setEmail('')
        setPhoneNumber('')
        setStaff('')
        setBio('')
        setEmailNotif('')
        setValidationErrors([])

    }

    // Registration.defaultProps = {

    // }
console.log(staff);
    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text'
                    onChange= {(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input id='email' type='text'
                    onChange= {(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input id='phoneNumber' type='text'
                    onChange= {(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </div>
                <div>
                    <label htmlFor='staff'>Staff</label>
                    <input id='staff' type='radio'
                    onClick= {(e) => setStaff('Instructor')} value={staff} checked={staff==='Instructor'} />Instructor
                    <input id='staff' type='radio'
                    onClick= {(e) => setStaff('Student')} value={staff} checked={staff==='Student'} />Student
                </div>
                <div>
                    <label htmlFor='bio'>bio</label>
                    <textarea id='bio' type='text'
                    onChange= {(e) => setBio(e.target.value)} value={bio} />
                </div>
                <div>
                    <label htmlFor='emailNotif'>Email Notification</label>
                    <input id='emailNotif' type='checkbox'
                    onChange= {(e) => setEmailNotif('Email Notifications')} value={emailNotif==='Email Notification'}  />
                </div>
            </form>
        </div>
    );
}


export default Registration;
