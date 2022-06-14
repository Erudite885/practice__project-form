import React from 'react';

import styles from './CourseInput.module.css';

const CourseInput = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }


  return (
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
            <div className={styles.formControl}>
                <label className={styles.label}>Course Goal </label>
                <input type="text" className={styles.input} />
            </div>
            <button type="submit" className={styles.button}> Add Goal </button>
        </form>
      </div>
  );
}

export default CourseInput;