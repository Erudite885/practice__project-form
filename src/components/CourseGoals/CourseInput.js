import React, { useState } from 'react';


import styles from './CourseInput.module.css';

const CourseInput = () => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e)
        // enteredTitle('')
        const data = {
            title: enteredTitle
        }
        console.log(data)
        setEnteredTitle('')
    };


  return (
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
            <div className={styles.formControl}>
                <label className={styles.label}>Course Goal </label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} className={styles.input} />
            </div>
            <button type="submit" className={styles.button}> Add Goal </button>
        </form>
      </div>
  );
}

export default CourseInput;