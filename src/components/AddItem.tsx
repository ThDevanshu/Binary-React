import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const AddItem = () => {
  const [itemDetails, setItemDetails] = useState({
    title: "",
    link: "",
    iconUrl: "",
    tagName: "User",
    category: "",
    description: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Item Details:", itemDetails);
    setError("Can't be created at the moment!");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 bg-gray-100">
          <Link to="/" className="inline-block mb-4">
            <button className="text-blue-500 outine-none hover:outline "> ◀ User</button>
          </Link>

          <h1 className="text-2xl font-bold mb-4">Item Details</h1>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">ITEM TITLE</label>
              <input
                type="text"
                name="title"
                value={itemDetails.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Enter the item title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LINK</label>
              <input
                type="url"
                name="link"
                value={itemDetails.link}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Enter the item link"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ICON URL</label>
              <input
                type="url"
                name="iconUrl"
                value={itemDetails.iconUrl}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Enter the icon URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">TAG NAME</label>
              <select
                name="tagName"
                value={itemDetails.tagName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="User">User</option>
                <option value="Request">Request</option>
                <option value="Resource">Resource</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CATEGORY</label>
              <input
                type="text"
                name="category"
                value={itemDetails.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Enter the category"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DESCRIPTION</label>
              <textarea
                name="description"
                value={itemDetails.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Enter a description"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-4"
              >
                CREATE
              </button>
              {error && <p className="text-red-500 font-bold">{error}</p>}
            </div>
          </form>
        </div>

        {/* Background Section */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
          }}
        />
      </div>
    </div>
  );
};

export default AddItem;
