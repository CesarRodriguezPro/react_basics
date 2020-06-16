import React from "react";
import Contacts from '../contacts'
import Card from './Card'


function createCard(Contact) {
return <Card 
key={Contact.id}
name={ Contact.name } 
img={ Contact.imgURL } 
tel={ Contact.phone } 
email={ Contact.email } />
}



function App() {
    return <div>
                <h1 className="heading"> My Contacts </h1> 
                <div Id="contactsList"> 
                    {Contacts.map(createCard)}
                </div>
          </div>
}

export default App;