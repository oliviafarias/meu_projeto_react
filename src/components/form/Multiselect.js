import styles from './Multiselect.module.css'

function Multiselect ({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione um opcao</option>
            </select>
        </div>
    )
}

export default Multiselect