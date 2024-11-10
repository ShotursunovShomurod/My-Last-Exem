import { FormEvent, useState } from "react";
import { useCreateProductMutation } from "../../redux/api/product-api";

interface ItemData {
  name: string;
  cost: number;
  previousCost: number;
  description: string;
  score: number;
  type: string;
  shade: string;
  images: string[];
}

const CreateProduct = () => {
  const [submitProduct, { isLoading }] = useCreateProductMutation();
  const [message, setMessage] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("Продажа");

  // State hooks for each form field
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [previousCost, setPreviousCost] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState("");
  const [type, setType] = useState("");
  const [shade, setShade] = useState("");
  const [images, setImages] = useState("");

  const handleProductSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData: ItemData = {
      name,
      cost: parseFloat(cost),
      previousCost: parseFloat(previousCost),
      description,
      score: parseFloat(score),
      type,
      shade,
      images: images.split("\n").filter(Boolean),
    };

    try {
      await submitProduct(productData).unwrap();
      setMessage("Product successfully added!");

      // Reset all fields
      setName("");
      setCost("");
      setPreviousCost("");
      setDescription("");
      setScore("");
      setType("");
      setShade("");
      setImages("");
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setTimeout(() => setMessage(null), 3000); 
    }
  };

  return (
    <div className="bg-[#F3F3F3] p-6">
      <h2 className="text-[50px] text-center font-bold mb-10">Разместить объявление</h2>
      {message && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
          {message}
        </div>
      )}

      <div className="flex justify-center space-x-3 mb-10">
        {["Продажа", "Аренда", "Сожительство"].map((tab) => (
          <button
            key={tab}
            className={`w-[250px] h-[144px] rounded-[15px] transition-all duration-300 transform ${
              selectedTab === tab
                ? "bg-white text-orange-500 scale-110"
                : "bg-[#EEEEEE] text-gray-500 scale-100"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            <p className="text-lg font-bold">{tab}</p>
            <p>
              {tab === "Продажа"
                ? "Разместить объявление о продаже"
                : tab === "Аренда"
                ? "Разместить объявление об аренде"
                : "Разместить объявление о сожительстве"}
            </p>
          </button>
        ))}
      </div>

      {/* Form for product details */}
      <form className="flex flex-col max-w-sm gap-y-5 mx-auto" onSubmit={handleProductSubmit}>
        <input
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          type="text"
          name="name"
          placeholder="Product name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          type="number"
          name="cost"
          placeholder="Price..."
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          type="number"
          name="previousCost"
          placeholder="Previous price..."
          value={previousCost}
          onChange={(e) => setPreviousCost(e.target.value)}
        />
        <input
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          type="text"
          name="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          type="number"
          name="score"
          placeholder="Rating..."
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <select
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="mens">Men's Apparel</option>
          <option value="womens">Women's Apparel</option>
          <option value="girls">Girls' Apparel</option>
          <option value="kids">Kids' Apparel</option>
          <option value="computers">Laptops</option>
          <option value="smartphones">Phones</option>
        </select>
        <select
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          name="shade"
          value={shade}
          onChange={(e) => setShade(e.target.value)}
        >
          <option value="">Select Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
        </select>
        <textarea
          required
          className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
          name="images"
          placeholder="Enter image URLs (one per line)..."
          value={images}
          onChange={(e) => setImages(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="border py-2 rounded-xl bg-black text-white transition-all hover:bg-white hover:border-black hover:text-black"
        >
          {isLoading ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;