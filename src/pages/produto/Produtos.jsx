import Sidebar from "../../components/partials/Sidebar"
export function Produtos() {
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
                            
                                <tr>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900 dark:text-gray-100"><a className="hover:bg-gray-700 px-3 py-1 rounded-lg">Cerveja</a></td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300"></td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300"></td>
                                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300"></td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}