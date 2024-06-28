import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    const handlelogout = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/logout/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
  
        if (response.ok) {
            // Limpar o token do localStorage ou da variável de estado de autenticação
            localStorage.removeItem('token');
            // Navegar para a tela de login ou outra página após o logout
            navigate('/login'); // ou useNavigate('/login') se estiver usando react-router-dom
        } else {
            console.error('Falha ao fazer logout');
        }
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
    }
  }

    
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button
          onClick={toggleSidebar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
  
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 w-60 md:w-60 h-screen transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Link href="#" className="flex items-center ps-2.5 mb-5">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                MaximusProducts
              </span>
            </Link>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to={"/"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/produto"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                </Link>
              </li>
              <li>
                <Link onClick={handlelogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span  className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  };

export default Sidebar;