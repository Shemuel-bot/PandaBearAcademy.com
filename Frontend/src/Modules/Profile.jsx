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
    { label: 'Courses Enrolled', value: '8', icon: 'https://img.icons8.com/?size=100&id=37814&format=png&color=000000' },
    { label: 'Lessons Completed', value: '42', icon: 'https://img.icons8.com/?size=100&id=VeUo27LTyt8A&format=png&color=000000' },
    { label: 'Current Streak', value: '7', icon: 'https://img.icons8.com/?size=100&id=18515&format=png&color=000000' },
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
                  <img src={stat.icon} alt={stat.label} className={styles.settingIcon} />
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
                <img src="https://img.icons8.com/?size=100&id=94&format=png&color=000000" alt="Change Password" className={styles.settingIcon} />
                <h3>Change Password</h3>
                <p>Update your password to keep your account secure.</p>
                <button className={styles.settingButton}>Update</button>
              </div>

              <div className={styles.settingCard}>
                <img src="https://img.icons8.com/?size=100&id=37084&format=png&color=000000" alt="Notifications" className={styles.settingIcon} />
                <h3>Notifications</h3>
                <p>Manage your notification preferences.</p>
                <button className={styles.settingButton}>Manage</button>
              </div>

            
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
