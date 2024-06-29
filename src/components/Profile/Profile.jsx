
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
            <div className={s.profile}>
                <div className={s.imgWrap}>
                    <img className={s.img}
                    src={image}
                    alt="User avatar"
                    />
                </div>
                <div className={s.description}>
                    <p className={s.name}>{name}</p>
                    <p className={s.tag}>@{tag}</p>
                    <p className={s.location}>{location}</p>
                </div>
                <ul className={s.stats}>
                    <li className={s.item}>
                        <span className={s.label}>Followers</span>
                        <span className={s.amount}>{stats.followers}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Views</span>
                        <span className={s.amount}>{stats.views}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Likes</span>
                        <span className={s.amount}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
    );
};

export default Profile;