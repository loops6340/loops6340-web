import Link from "next/link";
import styles from "../../styles/seiva.module.scss";
import {GetStaticProps} from "next";
import axios from 'axios'

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
            {emojis.map((emoji, i) =>  (
              <li key={i}>
                <img src={emoji}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
    const request = await axios.get("https://discord.com/api/v8/guilds/760160214204022785", {
      headers: {
        Authorization: `Bot ${process.env.BOT_TOKEN}`
      }
    })

    const guild = request.data 

    return {
        props: {
            name: guild.name,
            iconURL: `https://cdn.discordapp.com/icons/760160214204022785/${guild.icon}`,//seiva.iconURL({ dynamic: true }),
            emojis: guild.emojis.map((emoji: any) => `https://cdn.discordapp.com/emojis/${emoji.id}`)
        }
    }
}

export default SeivaServer;
