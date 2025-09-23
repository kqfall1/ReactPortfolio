import '../styles/ContactForm.css'; 

export default function () { 
    return ( 
        <form id="contactForm"> 
            <label for="firstNameInput">First name: </label>
            <input id="firstNameInput" type="text" />
            <label for="lastNameInput">Last name: </label>  
            <input id="lastNameInput" type="text"/><br />
            <label for="phoneNumberInput">Phone number: </label>
            <input id="phoneNumberInput" type="text"/>
            <label for="emailInput">Email: </label>
            <input id="emailInput" type="text"/><br />
            <textarea></textarea> 
            <button>Submit</button>
            <button>Reset</button>
        </form>     
    )
}