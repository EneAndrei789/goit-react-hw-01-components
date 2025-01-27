import styles from './Fiendlist.module.css';
import PropTypes from 'prop-types';

const Friendlist = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={styles.item}>
                    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Friendlist;

