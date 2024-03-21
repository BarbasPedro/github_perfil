import { useEffect, useState } from "react"
import styles from './Respos.module.css'

const Repositorios = ({ usuario }) => {
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect( () => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${usuario}/repos`)
    .then(res => res.json())
    .then(resJson => {
      setTimeout((() =>{
        setIsLoading(false);
        setRepositorios(resJson);
      }), 3000)
    })
  }, [usuario])

  return (
    <div className="container">
      {loading ?
        <h1>Loading</h1> :
        <ul className={styles.list}>
          {repositorios.map (({id, name, language, html_url}) => (
            <li key={id} className={styles.listItem}>
              <b className={styles.itemName}>Nome:</b>
                {name} <br/>
              <b className={styles.itemLanguage}>Linguagem:</b>
                {language}
              <a target="_blank" href={html_url} className={styles.itemLink}>Visite o site</a>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Repositorios
