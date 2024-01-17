import React from "react";

const EditForm = ({ editedMovie, onUpdate, onCancel, onChange }) => {
  return (
    <div className="edit_container">
      <h2>Edit Movie</h2>
      <form>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedMovie.title || ""}
            onChange={onChange}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedMovie.description || ""}
            onChange={onChange}
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={onUpdate}>
            Update
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
