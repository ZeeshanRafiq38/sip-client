import isBase64 from "components/utils/isBase64";
import React, { useRef } from "react";

const ImageUpload = ({ value, setValue }) => {
    const fileInputRef = useRef(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const result = reader.result;
            if (!isBase64(result)) {
                setValue(result);
            }
            else {
                setValue(result)
            }
        };
    };

    const handleButtonClick = () => {
        // Trigger the file input click event
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <div>
            <div className="flex flex-col items-center gap-4">
                <div>
                    <img
                        src={value}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "100px" }}
                        className="rounded-full"
                    />
                </div>
                <input
                    type="file"
                    // accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
                <button
                    className="btn-secondary text-center"
                    onClick={handleButtonClick}
                    type="button"
                >
                    Upload Image
                </button>
            </div>
        </div>
    );
};

export default ImageUpload;
