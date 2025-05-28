import React, { useEffect, useState } from "react";
import axios from "axios";

const Clienticon = () => {
  const [logos, setLogos] = useState([]);
  const [newLogo, setNewLogo] = useState({ name: "", image: null });
  const [editingLogo, setEditingLogo] = useState(null);

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    const res = await axios.get("http://localhost:5000/api/logos");
    setLogos(res.data);
  };

  const handleAddLogo = async () => {
    if (!newLogo.image || !newLogo.name) return alert("Please enter name and select image");
    const formData = new FormData();
    formData.append("name", newLogo.name);
    formData.append("image", newLogo.image);

    await axios.post("http://localhost:5000/api/logos", formData);
    setNewLogo({ name: "", image: null });
    await fetchLogos();
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", editingLogo.name);
    if (editingLogo.image) formData.append("image", editingLogo.image);

    await axios.put(
      `http://localhost:5000/api/logos/${editingLogo._id}`,
      formData
    );
    setEditingLogo(null);
    await fetchLogos();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/logos/${id}`);
    await fetchLogos();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Client Logos</h2>

      <div className="mb-4 d-flex gap-2">
        <input
          type="text"
          placeholder="Logo Name"
          value={newLogo.name}
          onChange={(e) => setNewLogo({ ...newLogo, name: e.target.value })}
          className="form-control"
          style={{ maxWidth: "200px" }}
        />
        <input
          type="file"
          className="form-control"
          style={{ maxWidth: "200px" }}
          onChange={(e) => setNewLogo({ ...newLogo, image: e.target.files[0] })}
        />
        <button className="btn btn-primary" onClick={handleAddLogo}>
          Add Logo
        </button>
      </div>

      <div className="row row-cols-2 row-cols-md-3 g-4">
        {logos.map((logo) => (
          <div key={logo._id} className="col">
            <div className="border p-3 d-flex flex-column align-items-center">
              <img
                src={`http://localhost:5000/uploads/${logo.image}?v=${Date.now()}`}
                alt={logo.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setEditingLogo(logo)}
              />
              <p className="mt-2">{logo.name}</p>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(logo._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingLogo && (
        <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          <div className="bg-white p-4 rounded" style={{ minWidth: "300px" }}>
            <h3>Edit Logo</h3>
            <input
              type="text"
              className="form-control mb-2"
              value={editingLogo.name}
              onChange={(e) =>
                setEditingLogo({ ...editingLogo, name: e.target.value })
              }
            />
            <input
              type="file"
              className="form-control mb-3"
              onChange={(e) =>
                setEditingLogo({ ...editingLogo, image: e.target.files[0] })
              }
            />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-success" onClick={handleUpdate}>
                Update
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditingLogo(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clienticon;
