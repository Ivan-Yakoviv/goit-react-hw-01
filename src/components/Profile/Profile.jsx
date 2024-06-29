
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <section>
            <div>
                <div className={s.imgWrap}>
                    <img className={s.img}
                    src={image}
                    alt="User avatar"
                    />
                </div>
                <div>
                    <p className={s.name}>{name}</p>
                    <p className={s.tag}>@{tag}</p>
                    <p className={s.location}>{location}</p>
                </div>
                <ul className={s.stats}>
                    <li>
                        <span>Followers</span>
                        <span>{stats.followers}</span>
                    </li>
                    <li>
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li>
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Profile;