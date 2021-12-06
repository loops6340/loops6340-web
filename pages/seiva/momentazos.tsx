import Link from "next/link";
import styles from '@styles/momentazos.module.scss'
import { InferGetStaticPropsType } from "next";
import { PrismaClient } from '@prisma/client'

const Momentazos = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="container">
      <h1 className="title">Momentazos</h1>
      <div>
        <Link href="/seiva" passHref>
	  <button>Regresar</button>
        </Link>
      </div>
      <div className={styles.container}>
	{/*posts.map((post, i) => (
	    <div className={styles.containerItem} key={i}>
		<img src={post.url}/>
	    </div>
	))*/}
      </div>
    </div>
  );
};

export default Momentazos;

export const getStaticProps = async () => {
 /* const prisma = new PrismaClient()

  const posts = await prisma.momentazo.findMany()
  */
 const posts: string[] = []
  return {
    props: { posts } 
  }
}
