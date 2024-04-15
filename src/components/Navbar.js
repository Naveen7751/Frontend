// import React from 'react';
// import styles from './Header.module.css';

// const Navbar = () => {

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <header className={styles.header}>
//       <nav className={styles.nav}>
//         <div className={styles.hackathon}>
//           <strong><a href="#">Hackathon</a></strong>
//         </div>
//         <div className={styles.rightLinks}>
//           <div className={styles.homeLink}>
//             <a href="#">Home</a>
//           </div>
//           <div className={styles.homeLink}>
//             <a href="#" onClick={scrollToTop}>Idea</a>
//           </div>
//           <div className={styles.loginRegister}>
//             <a href="#">Profile</a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Header.module.css';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.hackathon}>
          <strong><Link to="/">Hackathon</Link></strong>
        </div>
        <div className={styles.rightLinks}>
          <div className={styles.homeLink}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.homeLink}>
            <Link to="/userdashboard" onClick={scrollToTop}>Idea</Link>
          </div>
          <div className={styles.loginRegister}>
            <Link to="/userprofile">Profile</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
