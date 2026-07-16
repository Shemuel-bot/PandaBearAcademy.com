import React from 'react';
import styles from '../css/courses.module.css';
import { Link } from 'react-router-dom';

const enrolledCourses = [
  { title: 'Calculus', description: 'Limits, derivatives, and real-world applications', icon: '∫' },
  { title: 'Linear Algebra', description: 'Vectors, matrices, and transformations', icon: '⚙' }
];

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
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brandBlock}>
            <div className={styles.brandBadge}>PB</div>
            <div>
              <p className={styles.eyebrow}>Learning dashboard</p>
              <h1>Panda Bear Academy</h1>
            </div>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.starbits}>
              <span>★</span> 5
            </div>
            <button className={styles.optionsBtn}>Options</button>
          </div>
        </header>

        <main className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Your Courses</h2>
              <p>Pick up where you left off and keep learning.</p>
            </div>
            <div className={styles.courseGrid}>
              {enrolledCourses.map((course) => (
                <article key={course.title} className={`${styles.courseCard} ${styles.featured}`}>
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
                    <article key={course.title} className={styles.courseCard}>
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