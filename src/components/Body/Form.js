import React from 'react';
import styles from "./Form.module.css"
import Select from "react-select";


const Form = ({selectedOption, taskname, expertname, setSelectedOption, setTaskname, setExpertname, submitHandler}) => {


    const options = [
        { value: 'notdone', label: 'انجام نشده' },
        { value: 'whiledoing', label: 'در حال انجام' },
        { value: 'challenging', label: 'چالشی' },
        { value: 'done', label: 'انجام شده' }
    ];


    const changehandler1 = (event) => {
        setTaskname(event.target.value)
    }

    const changehandler2 = (event) => {
        setExpertname(event.target.value)
    }

    const changehandler3 = (event) => {
        setSelectedOption(event)
    }


    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler}>

                <label>نام تسک</label>
                <input className={styles.inputs} type='text' value={taskname} onChange={changehandler1}/>
                
                <br/>

                <label>نام کارشناس</label>
                <input className={styles.inputs} type="text" value={expertname} onChange={changehandler2} />

                <br/>
                <label>وضعیت</label>
                <Select className={styles.select} options={options} value={selectedOption} onChange={changehandler3} />

                <button type="submit">ارسال</button>
            </form>
        </div>
    );
};



export default Form;