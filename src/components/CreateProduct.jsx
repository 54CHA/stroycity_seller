import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        articleNumber: '',
        price: '',
        discountPrice: '',
        length: '',
        width: '',
        height: '',
        weight: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        // Handle image upload logic here
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Handle successful response
                console.log('Product created successfully');
                // You might want to redirect the user or update the UI here
            } else {
                // Handle error response
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="w-[87%] m-auto">
            <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Список товаров
            </div>
            <form onSubmit={handleSubmit} className="w-5/12">
                <div className="flex flex-col mb-5 ">
                    <h1>Информация о товаре</h1>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Название" required />
                    <input type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Категория Товара" required />
                    <input type="text" name="articleNumber" value={formData.articleNumber} onChange={handleInputChange} placeholder="Артикул" required />
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Ваша цена, ₽ " required />
                    <input type="number" name="discountPrice" value={formData.discountPrice} onChange={handleInputChange} placeholder="Цена со скидкой, ₽ " />
                </div>
                <div className="flex flex-col mb-5">
                    <h1>Габариты и вес</h1>
                    <input type="number" name="length" value={formData.length} onChange={handleInputChange} placeholder="Длина упаковки, мм" required />
                    <input type="number" name="width" value={formData.width} onChange={handleInputChange} placeholder="Ширина упаковки, мм" required />
                    <input type="number" name="height" value={formData.height} onChange={handleInputChange} placeholder="Высота упаковки, мм" required />
                    <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="Вес с упаковкой, г" required />
                </div>
                <div className="mb-5">
                    <h1>Изображения</h1>
                    <input type="file" multiple onChange={handleImageUpload} accept="image/*" />
                </div>
                <div className="flex justify-between">
                    <Link to="/admin"><button type="button">Отмена</button></Link>
                    <button type="submit">Завершить создание</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;