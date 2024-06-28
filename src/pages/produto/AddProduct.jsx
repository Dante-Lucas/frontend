import Sidebar from "../../components/partials/Sidebar";
import { Addform } from "../../components/produto/Addform";



export function AddProduct() {
    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <h1 className="p-5 font-medium text-3xl dark:text-white">Cadastro de produtos:</h1>
                <Addform />
            </div>
        </div>
    )
}