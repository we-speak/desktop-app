import s from './ProfileCard.module.scss';
import img from '/avatar.jpg'


export function ProfileCard() {
    return (
        <div className={s['profileCard']}>
            <div className={s['profile-header']}>
                <div className={s['img-container']}>
                    <img className={s['profile-img']} src={img} alt="profile-img" />
                    <div className={s['online-dot']} aria-label='online'></div>
                </div>
                <div className={s['profile-name-container']}>
                    <h2 className={s['profile-name-text']}>Valery Ivanov</h2>
                    <p className={s['profile-username']}>@mamkincoder227</p>
                    
                </div> 
            </div>
        </div>
    );
}   