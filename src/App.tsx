import * as React from 'react';
import './style.css';
import './tailwind.css';
import 'tailwindcss/tailwind.css';
import Card from './components/Card';

export default function App() {
  return (
    <div className="bg-blue-500">
      <h1 className="text-purple-600">Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Card />
    </div>
  );
}
