import React, { useState } from 'react';

// import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
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
    ])

  return (
  <div>
    <div>CourseGoals App</div>
    <CourseInput />
    {/* <section id='goals'>
        {content}
    </section> */}
  </div>
  );
}

export default App;