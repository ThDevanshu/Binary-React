import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const Location = useLocation();
  console.log(location);

  const curpath=Location.pathname === '/add-item'; 
    return (
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
        
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1542176281-363d7e8c1c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" // Replace with your logo's file path
            alt="Logo"
            className="h-8 mr-2"
          />
          <h1 className="text-lg font-bold">NXT Wave</h1>
        </div>
  
        
        <div className="flex items-center space-x-4">
        <Link to="/add-item">
          {!curpath && (<button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Add Item
          </button>)}


        </Link>  
          <img
            src="https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" // Replace with your profile image path
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </header>
    );
  };
  
  export default Header;
  