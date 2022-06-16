import React, { useState } from 'react';

import styles from './CourseInput.module.css';

const CourseInput = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (e) => {
        if (e.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredTitle(e.target.value);
        
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (enteredTitle.trim().length === 0 ){
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredTitle)
        setEnteredTitle('')
    };


  return (
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
            <div className={styles.formControl}>
                <label className={styles.label}>Course Goal </label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} className={`${styles.input} ${!isValid && styles.invalid}`} />
            </div>
            <button type="submit" className={styles.button}> Add Goal </button>
        </form>
      </div>
  );
}

export default CourseInput;