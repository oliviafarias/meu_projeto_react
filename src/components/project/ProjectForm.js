import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Multiselect from '../form/Multiselect'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'

function ProjectForm ({ btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

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

            <Multiselect name="category_id" 
                        text="Selecione a categoria" 
                        options={categories}>
            </Multiselect>

            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectForm