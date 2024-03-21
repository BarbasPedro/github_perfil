import styles from './Perfil.module.css';

const Perfil = ({usuario}) => {
  return (
    <header className={styles.header}>
      <h1>{usuario}</h1>
      <img className={styles.img} src={`https://github.com/${usuario}.png`} alt="Avatar" />
    </header>
  )
}

export default Perfil
