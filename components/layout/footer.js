import Link from 'next/link'
import styles from './footer.module.css'

function FooterComponent(){
    return(
        <>
            <footer className={styles.footer}>
                <h4 className={styles.footerText}>It's footer section</h4>
                <ul>
                    <li>
                        <Link href='/about-us'>About Page</Link>
                    </li>
                    <li>
                        <Link href='/all/doc-page'>Doc Page</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default FooterComponent;