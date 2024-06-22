import Sidebar from "../../components/partials/Sidebar"
import { useState,useEffect } from "react"
export const Produtos = () => {
    const [produto,setProduto] = useState([]);
    
useEffect(() => {    
    const fetchProdutos = async (e) => {
        //e.preventDefault()
        try{
            const response = await fetch('http://localhost:8000/api/v1/produto',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',    
                },
            })
            const result = await response.json()
            if(response.ok){
                   setProduto(result)
                   console.log(result.listar_produto)
            }
        } catch(error){
            console.log(error)
        }
    }
fetchProdutos() 
}, [])

         

    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64"> 
                <h1 className="p-5 font-medium text-3xl text-gray-800 dark:text-gray-100">Listagem de Produtos</h1>  
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
                            {produto.map((produto) => (
                                <tr key={produto.id}>
                                    <td  className="px-4 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900 dark:text-gray-100"><a className="hover:bg-gray-700 px-3 py-1 rounded-lg">{produto.nome_produto}</a></td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.categoria.nome}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.preco}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{produto.estoque}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}