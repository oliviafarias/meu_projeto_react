function ProjectForm () {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto..."></input>
            </div>

            <div>
                <input type="number" placeholder="Insira o orcamento total do projeto..."></input>
            </div>

            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select>
            
            <div>
                <input type="submit" value="Criar projeto"></input>
            </div>
        </form>
    )
}

export default ProjectForm