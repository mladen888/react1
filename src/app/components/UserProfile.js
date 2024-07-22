'use client';
import React, { useState } from 'react';

const UserProfile = () => {
  
  const [profile, setProfile] = useState({name: "",age: "",location: ""});

  const handleNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  }

  const handleAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  }

  const handleLocationChange = (e) => {
    setProfile({ ...profile, location: e.target.value });
  }

  return (
    <div>
      <form>
          <input
            type="text"
            value={profile.name}
            onChange={handleNameChange}
            placeholder='Name'
          />
        <br />
        <input
            type="text"
            value={profile.age}
            onChange={handleAgeChange}
            placeholder='Age'
          />
        <br />
        <input
            type="text"
            value={profile.location}
            onChange={handleLocationChange}
            placeholder='Location'
          />
      </form>
      <div>
        <h2>User Profile</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Location: {profile.location}</p>
      </div>
    </div>
  );
}

export default UserProfile;
