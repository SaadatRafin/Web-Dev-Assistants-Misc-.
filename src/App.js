import React from 'react';
import TeachingAssistant from './TeachingAssistants';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

import image16084 from './assets/16084.jpg';
import image16706 from './assets/16706.jpg';
import image17402 from './assets/17402.jpg';
import image16077 from './assets/16077.jpg';

const App = () => {
  const assistants = [
    { name: "Precious Ajughu", email: "preciousa@eg.poly.edu", image: image17402 },
    { name: "Cat Almutee", email: "calmutee@eg.poly.edu", image: image16084 },
    { name: "Fahad Alqahtani", email: "falqahtani@eg.poly.edu", image: image16706 },
    { name: "Dareck Andarge", email: "dandarge@eg.poly.edu", image: image16077 },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <h2 className="text-2xl mb-4">Teaching Assistants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-20">
            {assistants.map((assistant, index) => (
              <TeachingAssistant key={index} {...assistant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;