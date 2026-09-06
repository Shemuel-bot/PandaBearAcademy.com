/** 
 * Courses component for displaying available courses.
 * In the future, this component can be expanded to include features such as
 * course enrollment, progress tracking, and personalized recommendations.
 * At the moment, it has a static number of courses offered listed with an array.
 */

import React from 'react';
import styles from '../css/courses.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Header from '../Components/Header';

// Placeholder data for other courses, grouped by category, will be replaced with dynamic data in the future.
const enrolledCourses = [
  { title: 'Calculus', description: 'Limits, derivatives, and real-world applications', icon: '∫' },
  { title: 'Linear Algebra', description: 'Vectors, matrices, and transformations', icon: '⚙' }
];


// Placeholder data for other courses, grouped by category, will be replaced with dynamic data in the future.
const courseGroups = [
  {
    title: 'Math',
    courses: [
      { title: 'Abstract Algebra', description: 'Structures and patterns in mathematics', icon: '✦' },
      { title: 'Topology', description: 'Spaces, continuity, and shape', icon: '⬢' },
      { title: '6th Grade Math', description: 'Core skills and problem-solving', icon: '✚' }
    ]
  },
  {
    title: 'Science',
    courses: [
      { title: 'Physics', description: 'Motion, energy, and forces', icon: '☄' },
      { title: 'Chemistry', description: 'Atoms, reactions, and molecules', icon: '⚗' },
      { title: 'Biology', description: 'Life systems and ecosystems', icon: '🌿' }
    ]
  },
  {
    title: 'History',
    courses: [
      { title: 'World History', description: 'Civilizations and global change', icon: '🗺' },
      { title: 'US History', description: 'Key moments and historical themes', icon: '🇺🇸' },
      { title: 'European History', description: 'Empires, revolutions, and ideas', icon: '🏛' }
    ]
  },
  {
    title: 'Language',
    courses: [
      { title: 'Spanish', description: 'Conversation, grammar, and culture', icon: '🗣' },
      { title: 'French', description: 'Fluency and everyday communication', icon: '🖋' },
      { title: 'German', description: 'Vocabulary and sentence structure', icon: '🔤' }
    ]
  }
];

export default function Courses() {
  const navigate = useNavigate();
  const handleCourseClick = (courseTitle) => {
    navigate(`/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-')}`);
  }
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Header />

        <main className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Your Courses</h2>
              <p>Pick up where you left off and keep learning.</p>
            </div>
            <div className={styles.courseGrid}>
              {enrolledCourses.map((course) => (
                <article key={course.title} className={`${styles.courseCard} ${styles.featured}`} onClick={() => handleCourseClick(course.title)}>
                  <div className={styles.courseIcon}>{course.icon}</div>
                  <div className={styles.courseMeta}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Other Courses</h2>
              <p>Explore new subjects and expand your skills.</p>
            </div>

            {courseGroups.map((group) => (
              <div key={group.title} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>{group.title}</h3>
                <div className={styles.categoryGrid}>
                  {group.courses.map((course) => (
                    <article key={course.title} className={styles.courseCard} onClick={() => handleCourseClick(course.title)}>
                      <div className={styles.courseIcon}>{course.icon}</div>
                      <div className={styles.courseMeta}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <Link to="/courses" className={styles.btn}>
                  see more
                </Link>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}