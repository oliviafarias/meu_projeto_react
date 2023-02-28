import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Multiselect from '../form/Multiselect'
import SubmitButton from '../form/SubmitButton'

function ProjectForm ({ btnText }) {
    return (
        <form className={styles.form}>
            <Input type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insir o nome do projeto...">
            </Input>

            <Input type="number" 
                    text="Orcamento do Projeto"
                    name="budget"
                    placeholder="Insira o orcamento total do projeto...">
            </Input>

            <Multiselect name="category_id" text="Selecione a categoria"></Multiselect>

            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectForm