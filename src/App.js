import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput';
import './App.css';


const App = () => {
    const [CourseGoals, setCourseGoals] = useState([
        {
            id: 'g1',
            text: 'Course Overview'
        }, 
        {
            id: 'g2',
            text: 'Course Preview'
        }, 
        {
            id: 'g3',
            text: 'Course Outline'
        }
    ]);

    const addGoalHandler = (enteredText) => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString });
            return updatedGoals;
        })
    };

    const deleteItemHandler = (goalId) => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p>No goals found.</p>
    );

    if (CourseGoals.length > 0){
        content = (
            <CourseGoalList items={CourseGoals} onDelete={deleteItemHandler} />
        );
    };

  return (
  <div>
    <div>CourseGoals App</div>
    <CourseInput onAddGoal={addGoalHandler} />
     <section id='goals'>
         {content}
    </section> 
  </div>
  );
}

export default App;