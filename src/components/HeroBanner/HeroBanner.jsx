import styles from './HeroBanner.module.css'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return ( 
    <div className={styles.hero}>
      <img className={styles.heroImage} src="./images/hero-banner.jpg" alt="" />
      <div className={styles.heroText}>
        <p>Have fun in the sun with our</p>
        <h1>Summer Sale</h1>
        <Link>
          <button>Shop the Sale</button>
        </Link>
      </div>
      
    </div>
  );
}

export default HeroBanner;