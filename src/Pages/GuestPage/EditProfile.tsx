import { useState } from "react";
import styles from "./GuestPage.module.css";

export const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    about: "",
    interests: "",
    galleryImages: [] as File[], // Specify the type as File[]
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedFiles = Array.from(files).slice(0, 5); // Limit to maximum 5 files
      setFormData({ ...formData, galleryImages: selectedFiles });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can access formData and perform further actions like submitting the data
    console.log(formData);
  };

  return (
    <div className={styles.WrapperEdit}>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
         />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="interests">Interests:</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="galleryImages">Gallery Images:</label>
          <input
            type="file"
            id="galleryImages"
            name="galleryImages"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <button>Update Profile</button>
      </form>
    </div>
  );
};
