import styles from './Header.module.css'

export type HeaderProps = {
    title: string
    subtitle?: string
}

const Header = ({ title, subtitle }: HeaderProps) => (
    <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
    </div>
)

export default Header
