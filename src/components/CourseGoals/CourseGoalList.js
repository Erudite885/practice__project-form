import React from 'react';

import CourseGoalItem from './components/CourseGoals/CourseGoalItem';
import styles from './CourseGoalList.module.css';

const CourseGoalList = (props) => {
  return (
    <ul className={styles.goalList}>
        {props.items.map(goal => (
            <CourseGoalItem 
            key={goal.id} 
            id={goal.id} 
            onDelete={props.onDeleteitem}> {goal.text} </CourseGoalItem>
        ))}
        
    </ul>
  );
};

export default CourseGoalList;