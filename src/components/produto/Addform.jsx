import { InputAdd } from "../inputs/Input"
import { Modal } from "../partials/Modal"
import { useState } from "react"
// Componente que renderiza o formulário de cadastro de produto com os seus campos e opções para adicionar fabricante e categoria
export const Addform = () => {
    // Estado para controlar o estado do modal de adição de categoria
    const [modalCategoriaOpen, setModalCategoriaOpen] = useState(false);
    // Estado para controlar o estado do modal de adição de fabricante
    const [modalFabricanteOpen, setModalFabricanteOpen] = useState(false);
    const [produto, setProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [categoria, setCategoria] = useState('');
    // Função para abrir o modal de adição de categoria
    const openModalCategoria = () => {
        setModalCategoriaOpen(true);
    }

    const closeModalCategoria = () => {
        setModalCategoriaOpen(false);
    }

    
    const openModalFabricante = () => {
        setModalFabricanteOpen(true);
    }

    const closeModalFabricante = () => {
        setModalFabricanteOpen(false);
    }
    
    const handleAddFabricante = async(e) => {
        e.preventDefault();
        try{
            const response =  await fetch('http://localhost:8000/api/v1/fabricante/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    'fabricante': fabricante
                })
            })
            if(!response.ok) throw new Error('Não foi possível adicionar o fabricante')
            const data = await response.json();
            setFabricante(data);
            console.log(data)
        } catch(error) {
            console.log(error)
        }        
    }

    const handleAddCategoria = async(e) => {
        e.preventDefault();
        try{
            const response =  await fetch('http://localhost:8000/api/v1/categoria/',{   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    'categoria': categoria
                })
            })
            if(!response.ok) throw new Error('Não foi possível adicionar a categoria')
            const data = await response.json();
            setCategoria(data);
            console.log(data)
        } catch(error) {
            console.log(error)
        }
    }
    
    
    return(
        <div>
           
            {/* Formulário de cadastro de produto */}
            <form className="rounded-md space-y-6 md:space-y-8 shadow-md p-6 bg-white dark:bg-gray-800" method="POST">
                   
                {/* Campo para o nome do produto */}
                <InputAdd 
                    name="nome" 
                    id="nome_produto" 
                    type="text" 
                    placeholder="Nome do produto" 
                    label="Nome do produto:" 
                    htmlFor="nome_produto" 
                    required
                />
               
                {/* Campo para a descrição do produto */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 pb-2" htmlFor="descricao_produto">Descrição do produto:</label>
                    <textarea className="block w-full resize-none rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 p-2" name="descricao" id="descricao_produto" cols="30" rows="5" placeholder="Descrição do produto"></textarea>
                </div>
               
                {/* Campos para o preço e o estoque do produto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <InputAdd 
                        name="preco" 
                        id="preco_produto" 
                        type="number" 
                        placeholder="Preço"
                        label="Preço:" 
                        htmlFor="preco_produto" 
                        required
                    />

                    <InputAdd 
                        name="estoque" 
                        id="estoque_produto" 
                        type="number" 
                        placeholder="Quantidade" 
                        label="Quantidade:" 
                        htmlFor="estoque_produto" 
                        required
                    />

                </div>
                    
                {/* Campos para selecionar o fabricante e a categoria do produto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 pb-2" htmlFor="fabricante_produto">Fabricante:</label>
                        <select className="block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 p-2" type="select" name="fabricante_produto" id="fabricante_produto" placeholder="Fabricante">
                            <option value="" selected disabled>Fabricante</option>
                            
                        </select>
                        
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 pb-2" htmlFor="categoria_produto">Categoria:</label>
                        <select className="block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 p-2" name="categoria_produto" id="categoria_produto" placeholder="Categoria">
                            <option value="" selected disabled>Categoria</option>
                            
                        </select>
                    </div>
                </div>
               
                {/* Botões para abrir os modais de adição de fabricante e categoria e para cadastrar o produto */}
                <div className="grid grid-cols-1 md:grid-cols-4 place-items-stretch gap-4 justify-items-center">
                    <button onClick={openModalFabricante} type='button' id ="modalfab" className="w-full px-4 py-2 bg-blue-600 text-white text-center border border-solid border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400">Adicionar fabricante</button>
                    <button onClick={openModalCategoria} type='button' id ='modalcate' className=" w-full px-4 py-2 bg-blue-600 text-white text-center border border-solid border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400">Adicionar categoria</button>
                    <button className="w-full  px-4 py-2 bg-green-600 text-white border border-solid border-green-700 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-400" type="submit">Cadastrar</button>
                    <button className="w-full px-4 py-2 bg-red-600 text-white border border-solid border-red-700 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-inset focus:ring-red-400" type="button">Cancelar</button>
                </div>
            </form>
                   
            {/* Modal para adicionar uma nova categoria */}
            <Modal
                isOpen={modalCategoriaOpen}
                onClose={closeModalCategoria}
                title="Adicione a categoria"
                onSubmit={handleAddCategoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            {/* Modal para adicionar um novo fabricante */}
            <Modal
                isOpen={modalFabricanteOpen}
                onClose={closeModalFabricante}
                title="Adicione o fabricante"
                onSubmit={handleAddFabricante}
                onChange={(e) => setFabricante(e.target.value)}
            />

        </div>
    )
}