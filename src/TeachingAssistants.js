import React from 'react';

const TeachingAssistant = ({ name, email, image }) => {
  return (
    <div className="min-w-64 h-68 border border-purple-500 flex flex-col items-center justify-start">
      <div className="bg-purple-900 text-white w-full text-center p-1">
        <h3>{name}</h3>
      </div>
      <img src={image} alt={name} className="w-32 h-40 object-cover my-1" />
      <div className="bg-gray-100 w-full text-center p-1">
        <p>{email}</p>
      </div>
    </div>
  );
};

export default TeachingAssistant;