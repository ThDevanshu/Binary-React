import { Resource } from "../types";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-white w-80">
        <div className="flex">
      {/* Icon */}
      <img
        src={resource.icon_url} // Ensure the API has an `icon` property
        alt={resource.title}
        className="h-12 w-12 mb-4"
      />
      <div className="mx-4">
      {/* Title and Category */}
      <h3 className="text-lg font-bold">{resource.title}</h3>
      <p className="text-gray-500 text-sm mb-2">{resource.category}</p>
      </div>
      </div>
      {/* URL */}
      <a
        href={resource.link} // Assuming API provides a `link` field
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm underline mb-2 block"
      >
        {resource.link}
      </a>
      {/* Description */}
      <p className="text-gray-600 text-sm">{resource.description}</p>
    </div>
  );
};

export default ResourceCard;
