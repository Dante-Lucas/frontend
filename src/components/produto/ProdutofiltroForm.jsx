import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProdutoForm = () => {
    const [fabricante, setFabricante] = useState([]);
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const fetchfiltros = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/fabricante/',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${localStorage.getItem('token')}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Não foi possível buscar os fabricantes');
                }
                const data = await response.json();
                setFabricante(data);
                const response2 = await fetch('http://localhost:8000/api/v1/categoria/',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${localStorage.getItem('token')}`,
                    },
                });
                if(!response2.ok) {
                    throw new Error('Não foi possível buscar as categorias');
                }
                const data2 = await response2.json();
                setCategoria(data2);
            } catch (error) {
                console.log(error);
            }
        } 
    fetchfiltros()
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados do formulário
        // para a API ou para realizar a navegação de acordo com a seleção feita.
        // Exemplo: enviar dados para a API usando fetch ou axios
        // Exemplo: navegar para a URL desejada usando useHistory do React Router
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4 justify-end mx-auto mt-8 w-full">
                <select
                    name="fabricante"
                    id="fabricante"
                    
                    className="px-2 py-1 sm:w-28 md:w-36 rounded-lg bg-white dark:bg-gray-800 text-sm font-normal text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 outline-none transition-all placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" selected disabled>Fabricante</option>
                    {/* Renderização das opções de fabricantes */}
                    {/* Substitua por um loop ou mapeamento dos dados conforme necessário */}
                    {/* Exemplo: fabricantes.map(fabricante => <option key={fabricante.id} value={fabricante.id}>{fabricante.nome}</option>) */}
                    {fabricante.map(fabricante => <option key={fabricante.id} value={fabricante.id}>{fabricante.nome}</option>)}
                </select>

                <select
                    name="categoria"
                    id="categoria"
                    
                    
                    className="px-2 py-1 sm:w-28 md:w-36 rounded-lg bg-white dark:bg-gray-800 text-sm font-normal text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 outline-none transition-all placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" selected disabled>Categoria</option>
                    {/* Renderização das opções de categorias */}
                    {/* Substitua por um loop ou mapeamento dos dados conforme necessário */}
                    {/* Exemplo: categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>) */}
                    {categoria.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
                </select>
                
                <div className="flex gap-4"> 
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white border border-solid border-blue-700 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                        </svg>
                    </button>
                    
                    {/* Exemplo de link para adicionar produto */}
                    <Link
                        to="/add"  // Substitua pela rota desejada
                        className="px-4 py-2 bg-green-600 text-white border border-solid border-green-700 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </form>
    );
};

