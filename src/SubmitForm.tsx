import React, { useState } from "react";
import Draggable from "react-draggable";

const SubmitForm: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            setImages((prevImages) => prevImages.concat(filesArray));
            Array.from(event.target.files).map((file) =>
                URL.revokeObjectURL(file)
            );
        }
    };

    return (
        <div>
            <form>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                />
            </form>

            {images.map((image, index) => (
                <Draggable>
                    <img
                        key={index}
                        src={image}
                        alt={`upload-${index}`}
                        style={{ width: "200px", margin: "10px" }}
                    />
                </Draggable>
            ))}
        </div>
    );
};

export default SubmitForm;
