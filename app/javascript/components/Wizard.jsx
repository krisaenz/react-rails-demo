import React from 'react';
import { TwitterPicker } from 'react-color';

// Populate palette based on base theme colors?
// Static now just for testing
function Wizard() {
    
    return(
        <div className="p-3 bg-gray-900 rounded-md w-1/4 m-1">
            <h1 className="text-white m-3 text-center">Designer</h1>
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-red-500 h-10"></button>
                <button className="bg-blue-500 h-10"></button>
                <button className="bg-green-500 h-10"></button>
                <button className="bg-purple-500 h-10"></button>
            </div>
            <TwitterPicker />
        </div>
    );
}

export default Wizard;