import Link from "next/link";
import styles from '@styles/momentazos.module.scss'
import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";
import axios from "axios";
import { Momentazo } from "../../types/momentazos";

const Momentazos = () => {

  const [momentazos, setMomentazos] = useState<Momentazo[]>([])

  useEffect(() => {
    axios.get('/api/momentazos').then(response => setMomentazos(response.data))
  }, [])

  return (
    <div className="container">
      <h1 className="title">Momentazos</h1>
      {/* <div>
        <Link href="/seiva" passHref>
	        <button>Regresar</button>
        </Link>
      </div> */}
      <div className={styles.container}>
	      {momentazos.map((momentazo, i) => (
	        <div className={styles.containerItem} key={i}>
	          <img src={momentazo.url}/>
	        </div>
	      ))}
        <div className={styles.containerItem}></div>
      </div>
    </div>
  );
};


export default Momentazos;