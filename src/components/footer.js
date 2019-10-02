import React from 'react';
import styles from "../styles/footer.module.scss";

const Footer = () => {
    var today = new Date();
    const year = today.getFullYear();
    return (
        <div className={styles.footer}>
            <h5>Copyright &copy; {year} PowerApps and Beyond </h5>
        </div>
    )
};

export default Footer
