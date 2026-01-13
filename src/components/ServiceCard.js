import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, icon, image, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick} data-animate-scroll>
            {image && <div className={styles.imageWrapper}><img src={image} alt={title} className={styles.image} /></div>}
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.arrow}>Explore &rarr;</div>
        </div>
    );
};

export default ServiceCard;
