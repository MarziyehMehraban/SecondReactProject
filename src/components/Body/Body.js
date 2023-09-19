import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import styles from "./Body.module.css";

const Body = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [taskname, setTaskname] = useState("");
    const [expertname, setExpertname] = useState("");
    const [dataArray, setDataArray] = useState([{
        taskname: '',
        expertname:'',
        selectedOption: ''
    }]);

    const submitHandler = (e) => {
        e.preventDefault();
        const newDataArray = {
            taskname: taskname,
            expertname: expertname,
            selectedOption: selectedOption
        };
        setDataArray([...dataArray, newDataArray]);
        // console.log(dataArray[0])
    }



    return (

        <div className={styles.container}>
            <Form 
            selectedOption={selectedOption} 
            taskname={taskname} 
            expertname={expertname}
            setSelectedOption={setSelectedOption}
            setTaskname={setTaskname}
            setExpertname={setExpertname}
            submitHandler={submitHandler}
            />
            <Table dataArray={dataArray} />
        </div>
    );
};

export default Body;