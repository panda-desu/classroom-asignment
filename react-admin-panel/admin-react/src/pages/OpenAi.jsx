import React from "react";
import Select from "react-select";

const options = [{ value: "large" }, { value: "medium" }, { value: "small" }];

export const OpenAi = () => {
  return (
    <div className="container">
      <div className="text-align-center">
        <h1>Image Generater</h1>
      </div>
      <div className="d-flex text-align-center">
        <div>
          <p className="mb-1">Prompt</p>
          <input
            type="text"
            placeholder="What do you want to draw by DALL_E ?"
          />
        </div>
        <div>
          <p>Size</p>
          <select>
            <option value="1">small</option>
            <option value="2">medium</option>
            <option value="3">large</option>
          </select>
        </div>
      </div>
    </div>
  );
};
