import React from 'react';

function UserList() {
  const listOfUser = [
    { id: 1, name: "  Future", email: "Future@music.com" },
    { id: 2, name: "Stefan Salvatore", email: "stefan@fiction.com" },
    { id: 3, name: "Solana Iman", email: "solana@popstar.com" },
    { id: 4, name: "Lamine Yamal", email: "lamine@football.com" },
    { id: 5, name: "Oprah Winfrey", email: "oprah@media.com" },
    { id: 6, name: "Elon Musk", email: "elon@tesla.com" },
    { id: 7, name: "Adele", email: "adele@music.com" },
    { id: 8, name: "Dwayne Johnson", email: "therock@movies.com" },
    { id: 9, name: "Rihanna", email: "rihanna@fenty.com" },

  ];

  return (
    <div>
      <h2>List of Celebrities</h2>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
