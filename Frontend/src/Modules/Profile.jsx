import React, { useState } from 'react';
import styles from '../css/profile.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Header from '../Components/Header';

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Placeholder user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 15, 2024',
    bio: 'Passionate learner exploring mathematics and science.',
    avatar: logo
  });

  const [formData, setFormData] = useState(userData);

  // Placeholder stats
  const stats = [
    { label: 'Courses Enrolled', value: '8', icon: '📚' },
    { label: 'Lessons Completed', value: '42', icon: '✓' },
    { label: 'Current Streak', value: '7', icon: '🔥' },
  ];

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(userData);
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Header />

        <main className={styles.content}>
          {/* Profile Header Section */}
          <section className={styles.profileHeader}>
            <div className={styles.profileCard}>
              <div className={styles.avatarSection}>
                <img src={userData.avatar} alt={userData.name} className={styles.avatar} />
              </div>

              {!isEditing ? (
                <div className={styles.profileInfo}>
                  <h1 className={styles.userName}>{userData.name}</h1>
                  <p className={styles.userEmail}>{userData.email}</p>
                  <p className={styles.joinDate}>Member since {userData.joinDate}</p>
                  <p className={styles.bio}>{userData.bio}</p>
                  <button className={styles.editButton} onClick={handleEditClick}>
                    ✎ Edit Profile
                  </button>
                </div>
              ) : (
                <div className={styles.editForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      rows="3"
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button className={styles.saveButton} onClick={handleSave}>
                      Save Changes
                    </button>
                    <button className={styles.cancelButton} onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Stats Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Your Progress</h2>
              <p>Track your learning achievements and statistics.</p>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statContent}>
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Account Settings Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Account Settings</h2>
              <p>Manage your account preferences and security.</p>
            </div>
            <div className={styles.settingsGrid}>
              <div className={styles.settingCard}>
                <div className={styles.settingIcon}>🔐</div>
                <h3>Change Password</h3>
                <p>Update your password to keep your account secure.</p>
                <button className={styles.settingButton}>Update</button>
              </div>

              <div className={styles.settingCard}>
                <div className={styles.settingIcon}>🔔</div>
                <h3>Notifications</h3>
                <p>Manage your notification preferences.</p>
                <button className={styles.settingButton}>Manage</button>
              </div>

            
            </div>
          </section>

          {/* Achievements Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Achievements</h2>
              <p>Badges and milestones you've earned.</p>
            </div>
            <div className={styles.achievementsGrid}>
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>🏆</div>
                <p className={styles.badgeTitle}>First Steps</p>
                <p className={styles.badgeDesc}>Completed your first lesson</p>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>⚡</div>
                <p className={styles.badgeTitle}>Week Warrior</p>
                <p className={styles.badgeDesc}>7-day learning streak</p>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>🚀</div>
                <p className={styles.badgeTitle}>Course Master</p>
                <p className={styles.badgeDesc}>Completed a full course</p>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>💯</div>
                <p className={styles.badgeTitle}>Perfect Score</p>
                <p className={styles.badgeDesc}>100% on a lesson</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
