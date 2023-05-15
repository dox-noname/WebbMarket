import React, { useState } from "react";

const ProfileSection = () => {
  const [profileData, setProfileData] = useState({
    photo: localStorage.getItem("photo") || "",
    name: localStorage.getItem("name") || "",
    description: localStorage.getItem("description") || ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileData({ ...profileData, photo: e.target.result });
      localStorage.setItem("photo", e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">
    <h1>Perfil de Usuario</h1>
    <div>
      <label htmlFor="photo">Foto de Perfil:</label>
      <input
        type="file"
        id="photo"
        accept="image/*"
        onChange={handlePhotoUpload}
      />
      {profileData.photo && (
        <img
          src={profileData.photo}
          alt="Foto de Perfil"
          className="profile-image"
        />
      )}
    </div>
    <div>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={profileData.name}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        name="description"
        value={profileData.description}
        onChange={handleInputChange}
      ></textarea>
    </div>
    <button
      onClick={() => {
        localStorage.setItem("name", profileData.name);
        localStorage.setItem("description", profileData.description);
      }}
    >
      Guardar
    </button>
  </div>
  );
};

export default ProfileSection;
