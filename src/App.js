import React, { useState } from 'react';
import './App.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputPosition, setInputPosition] = useState('');
  const [filter, setFilter] = useState('');

  const addEmployee = () => {
    if (!inputName.trim() || !inputPosition.trim()) return;
    setEmployees([...employees, { id: Date.now(), name: inputName, position: inputPosition }]);
    setInputName('');
    setInputPosition('');
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(filter.toLowerCase()) ||
    emp.position.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Employee Table</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Employee Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Position"
        value={inputPosition}
        onChange={(e) => setInputPosition(e.target.value)}
      />
      <button className="button" onClick={addEmployee}>Add Employee</button>
      <input
        className="input-field"
        type="text"
        placeholder="Search by Name or Position"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td><button className="button" onClick={() => deleteEmployee(emp.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UserTable() {
  const [users, setUsers] = useState([]);
  const [inputUsername, setInputUsername] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [filter, setFilter] = useState('');

  const addUser = () => {
    if (!inputUsername.trim() || !inputEmail.trim()) return;
    setUsers([...users, { id: Date.now(), username: inputUsername, email: inputEmail }]);
    setInputUsername('');
    setInputEmail('');
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(filter.toLowerCase()) ||
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>User Table</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button className="button" onClick={addUser}>Add User</button>
      <input
        className="input-field"
        type="text"
        placeholder="Search by Username or Email"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><button className="button" onClick={() => deleteUser(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <EmployeeTable />
      <UserTable />
    </div>
  );
}

export default App;
