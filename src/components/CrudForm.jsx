import React, { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const initialForm = {
  content: "",
  name: "",
  price: "",
  description: "",
  city: "",
  id: null,
};

const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.content ||
      !form.name ||
      !form.description ||
      // !form.city ||
      !form.price
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className={`form ${isModalOpen ? "modal-container" : ""}`}>
      {isModalOpen ? "" : <h3>Add a new bike</h3>}
      {isModalOpen ? null : (
        <button onClick={() => setIsModalOpen(true)}>Open</button>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <RiCloseCircleLine
              onClick={() => setIsModalOpen(false)}
              className="close"
            />

            <h3>{dataToEdit ? "Edit" : "Add" || dataToEdit}</h3>
            <form onSubmit={handleSubmit}>

              <input
                type="url"
                name="content"
                placeholder="Photo (url)"
                onChange={handleChange}
                value={form.content}
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={form.name}
              />

              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={form.description}
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                value={form.price}
              />

              <button type="submit">Send</button>

              <button
                type="reset"
                onClick={handleReset}>
                Clear
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrudForm;
