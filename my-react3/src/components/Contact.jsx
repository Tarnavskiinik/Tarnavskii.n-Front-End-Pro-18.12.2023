import { useEffect, useState } from "react"


export default function Contact(){
    const [contacts , setContacts] = useState([]);
    const [showForm , setShowForm ] = useState(false);
    const [name , setName] = useState('')
    const [surname , setSurname] = useState('')
    const [phone , setPhone] = useState('')





    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(error => console.error("Error fetching contacts:", error));
    }, [])

    const handleSaveContact = () =>{
        const newContact = {name, surname, phone};
        setContacts([...contacts, newContact]);

        setName('');
        setSurname('');
        setPhone('');
        setShowForm(false);
    }

    const handleDeleteContact = (index) => {
        const updateContact = [...contacts]
        updateContact.splice(index , 1);
        setContacts(updateContact);

    }


    return(
        <div>
        <h1>Список контактів</h1>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => handleDeleteContact(index)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => setShowForm(true)}>Додати контакт</button>
        </div>
        {showForm && (
          <div>
            <h2>Форма додавання нового контакту</h2>
            <label>
              Ім'я:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Прізвище:
              <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </label>
            <br />
            <label>
              Телефон:
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSaveContact}>Зберегти</button>
            <button onClick={() => setShowForm(false)}>Скасувати</button>
          </div>
        )}
      </div>
    )
}