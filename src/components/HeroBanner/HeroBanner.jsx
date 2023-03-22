import styles from './HeroBanner.module.css'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return ( 
    <div>
      <img className={styles.heroImage} src="./images/hero-banner.jpg" alt="" />
      <div>
        <p>Have fun in the sun with our</p>
        <h1>Summer Sale</h1>
        <Link>
          <button>Best Sellers</button>
        </Link>
      </div>
      
    </div>
  );
}

export default HeroBanner;