import Sidebar from "../../components/partials/Sidebar"
import { useState,useEffect } from "react"
import { ProdutoForm } from "../../components/produto/ProdutofiltroForm";
export const Produtos = () => {
    const [produto,setProduto] = useState([]);
    
useEffect(() => {    
    const fetchProdutos = async () => {
        //e.preventDefault()
        try{
            const response = await fetch('http://localhost:8000/api/v1/produto/',{
                method: 'GET',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',    
                },
            })
            
            if(!response.ok){
                if (response.status === 401)
                   throw new Error('Não foi possível buscar os produtos')
            }
            const result = await response.json()
            setProduto(result);
        } catch(error){
            console.log(`Fetch Error:`, error)
        }
    }
fetchProdutos() 
}, []);

         

    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64"> 
                <h1 className="p-5 font-medium text-3xl text-gray-800 dark:text-gray-100">Listagem de Produtos</h1>
                
                 <ProdutoForm />
                <div className="mt-8 overflow-x-auto rounded-lg">
                    <table className="divide-y divide-gray-200 bg-gray-50 dark:bg-gray-700 w-full">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100">Produtos</th>
                                <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Categoria</th>
                                <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Quantidade</th>
                                <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Preço</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {produto.map(produto  => { 
                             return (
                                <tr key={produto.id}>
                                    <td  className="px-4 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900 dark:text-gray-100">
                                        <a className="hover:bg-gray-700 px-3 py-1 rounded-lg">{produto.nome_produto}</a>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.dados_categoria.nome}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.preco}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.estoque}</td>
                                </tr>
                            );
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}