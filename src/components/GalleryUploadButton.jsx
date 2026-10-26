'use client';

import { useState } from 'react';

export default function GalleryUploadButton() {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="flex items-center gap-3">
            {/* Hidden file input wrapped in a styled label */}
            <label className="cursor-pointer text-xs bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 transition-colors inline-flex items-center gap-2">
                <span>Choose from Gallery</span>
                <input
                    name="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>

            {/* Display the selected file name */}
            {fileName ? (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">{fileName}</span>
                </p>
            ) : (
                <p className="text-sm text-gray-400">No file chosen</p>
            )}
        </div>
    );
}