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

  useEffect(() => {
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
    axios
      .post(apiUrl + "/category", { name: newCategory })
      .then((response) => {
        setCategories([...categories, response.data]);
        setNewCategory("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateBrand = () => {
    if (newBrand.trim() === "") return;
    axios
      .post(apiUrl + "/brand", { name: newBrand })
      .then((response) => {
        setBrands([...brands, response.data]);
        setNewBrand("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateMaterial = () => {
    if (newMaterial.trim() === "") return;
    axios
      .post(apiUrl + "/material", { name: newMaterial })
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
        .delete(apiUrl + `/category?category_id=${categoryId}`)
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
        .delete(apiUrl + `/brand?brand_id=${brandId}`)
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
        .delete(apiUrl + `/material?material_id=${materialId}`)
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
