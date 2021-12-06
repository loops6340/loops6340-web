import Link from "next/link";
import styles from "../../styles/seiva.module.scss";
import {GetStaticProps} from "next";

type Props = {
  name: string,
  iconURL: string,
  emojis: string[]
}

const SeivaServer = ({ name, iconURL, emojis }: Props) => {

  return (
    <>
      <div className="container">
        <h1 className="title">{name}</h1>
        <div className={styles.presentacionServidor}>
          <img src={iconURL} />
          <p>
            Bueno, este es el server de seiva, un bonito server la verdad, por
            ahora solo pondré unas cositas y luego se me ocurrirá que poner
          </p>
        </div>
        <h2 className="subtitle">Enlaces: </h2>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="/seiva/momentazos" passHref>
                <button>Momentazos</button>
              </Link>
            </li>
            <li>
              <Link href="/seiva/co2" passHref>
                <button>Traductor Co2</button>
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="subtitle">Emojis</h2>
        <div className={styles.emojisContainer}>
          <ul>
              {
                emojis.map((emoji, i) =>  (
                  <li key={i}>
                    <img src={emoji}/>
                  </li>
                ))
              }
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
 //   const seiva = await client.guilds.fetch('760160214204022785')

    return {
        props: {
            name: "hi",
            iconURL: "sSO!!",//seiva.iconURL({ dynamic: true }),
            emojis: "SOSs"//seiva.emojis.cache.map(emoji => emoji.url)
        }
    }
}

export default SeivaServer;
