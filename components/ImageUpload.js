import React, { useState } from 'react';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            setSelectedImage(URL.createObjectURL(file));
        } else {
            alert('Please select a valid image file.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle image upload logic here
        alert('Image uploaded: ' + selectedImage);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%', marginTop: '20px' }} />}
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUpload;
