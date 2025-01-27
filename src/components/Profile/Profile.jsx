import styles from './Profile.module.css'
import PropTypes from 'prop-types';

const Profile = ({user}) => {
    const { avatar, username, tag, location, stats } = user;
    return (
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img src={avatar} alt={`${tag}'s avatar`} />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.name}>{username}</h2>
            <p className={styles.username}>{username}</p>
            <p className={styles.location}>{location}</p>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.label}>Followers</span>
              <span className={styles.value}>{stats.followers}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.label}>Views</span>
              <span className={styles.value}>{stats.views}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.label}>Likes</span>
              <span className={styles.value}>{stats.likes}</span>
            </div>
          </div>
        </div>
      );
};

Profile.propTypes = {
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  export default Profile;


