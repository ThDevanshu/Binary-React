import { useEffect, useState } from "react";
import axios from "axios";
import ResourceCard from "./ResourceCard";
import Header from "./Header";
import { Resource } from "../types";

const Home = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [search, setSearch] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://media-content.ccbp.in/website/react-assignment/resources.json")
      .then((response) => setResources(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredResources = resources
    .filter((resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((resource) => (activeFilter ? resource.tag === activeFilter : true));

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 mx-40">
        
        <div className="border rounded-lg justify-center mx-auto my-4 flex w-6/12 h-10">
          <button
            className={`w-full border-2 hover:bg-blue-500 ${
              activeFilter === "" && "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveFilter("")}
          >
            Resources
          </button>
          <button
            className={`w-full border-2 hover:bg-blue-500 ${
              activeFilter === "request" && "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveFilter("request")}
          >
            Requests
          </button>
          <button
            className={`w-full border-2 hover:bg-blue-500 ${
              activeFilter === "user" && "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveFilter("user")}
          >
            Users
          </button>
        </div>
        
        <div className="flex justify-between items-center m-6">
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-2 rounded-lg w-6/12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-8 ">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
