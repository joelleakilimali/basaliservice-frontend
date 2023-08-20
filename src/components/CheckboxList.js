import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import XLSX as an object

// ... rest of the component code ...

const CheckboxList = ({ labels }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const handleCheckboxChange = (event, label) => {
    if (event.target.checked) {
      setSelectedPreferences((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedPreferences((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const handleDownload = () => {
    console.log("click");

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([
      { Preferences: selectedPreferences.join(", ") },
    ]);
    XLSX.utils.book_append_sheet(wb, ws, "Preferences");
    XLSX.writeFile(wb, "preferences.xlsx");
  };

  return (
    <div>
      <h2
        className="text-bold text-yellow-500 text-3xl my-5 py-8"
        style={{ marginBottom: "10px" }}
      >
        Cochez vos Préférences
      </h2>
      <div
        className="my-10 py-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "50px",
        }}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "40px" }}
              id={`service${index}`}
              onChange={(event) => handleCheckboxChange(event, label)}
            />
            <label htmlFor={`service${index}`} style={{ marginLeft: "10px" }}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <button
        style={{
          color: "white",
          fontSize: "20px",
          backgroundColor: "#f7d731",
          padding: "20px",
          borderRadius: "30px",
          fontWeight: "bold",
        }}
        onClick={handleDownload}
        // disabled={selectedPreferences.length === 0}
      >
        Telecharger
      </button>
    </div>
  );
};

export default CheckboxList;
