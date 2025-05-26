import { useState } from 'react';

type User = {
  name: string;
  age: number;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && age !== '') {
      setUser({ name, age: Number(age) });
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React with TypeScript </h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {user && (
        <div>
          <h2>User Info</h2>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
