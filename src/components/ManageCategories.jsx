import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageCategories = () => {
  const apiUrl = "https://api.bigbolts.ru";

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newMaterial, setNewMaterial] = useState("");

  const getToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      console.error("No JWT token found. User may not be authenticated.");
      return;
    }

    axios
      .get(apiUrl + "/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(apiUrl + "/brand")
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(apiUrl + "/material")
      .then((response) => {
        setMaterials(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateCategory = () => {
    if (newCategory.trim() === "") return; // prevent empty category creation

    const token = getToken();

    if (!token) {
      console.error("No JWT token found. User may not be authenticated.");
      // You might want to redirect to login page or show an error message to the user
      return;
    }

    axios
      .post(
        apiUrl + "/admin/category",
        { name: newCategory },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Category created successfully:", response.data);
        setCategories([...categories, response.data]);
        setNewCategory("");
      })
      .catch((error) => {
        console.error(
          "Error creating category:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleCreateBrand = () => {
    if (newBrand.trim() === "") return;
    const token = getToken();
    if (!token) {
      console.error("No JWT token found. User may not be authenticated.");
      return;
    }
    axios
      .post(
        apiUrl + "/admin/brand",
        { name: newBrand },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setBrands([...brands, response.data]);
        setNewBrand("");
      })
      .catch((error) => {
        console.error(
          "Error creating brand:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleCreateMaterial = () => {
    if (newMaterial.trim() === "") return;
    const token = getToken();
    if (!token) {
      console.error("No JWT token found. User may not be authenticated.");
      return;
    }
    axios
      .post(
        apiUrl + "/admin/material",
        { name: newMaterial },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setMaterials([...materials, response.data]);
        setNewMaterial("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .delete(apiUrl + `/admin/category?category_id=${categoryId}`) // Updated path
        .then((response) => {
          setCategories(
            categories.filter((category) => category.id !== categoryId)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDeleteBrand = (brandId) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      axios
        .delete(apiUrl + `/admin/brand?brand_id=${brandId}`) // Updated path
        .then((response) => {
          setBrands(brands.filter((brand) => brand.id !== brandId));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDeleteMaterial = (materialId) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      axios
        .delete(apiUrl + `/admin/material?material_id=${materialId}`) // Updated path
        .then((response) => {
          setMaterials(
            materials.filter((material) => material.id !== materialId)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="h-[40vh] relative w-[20%] m-auto mt-20">
      <b>Categories</b>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleCreateCategory}>Create Category</button>
      </div>

      <h2>Brands</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            {brand.name}
            <button onClick={() => handleDeleteBrand(brand.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Brand"
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
        />
        <button onClick={handleCreateBrand}>Create Brand</button>
      </div>

      <h2>Materials</h2>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            {material.name}
            <button onClick={() => handleDeleteMaterial(material.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Material"
          value={newMaterial}
          onChange={(e) => setNewMaterial(e.target.value)}
        />
        <button onClick={handleCreateMaterial}>Create Material</button>
      </div>
    </div>
  );
};

export default ManageCategories;
