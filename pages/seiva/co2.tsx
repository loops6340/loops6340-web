import {
  useState,
  ChangeEventHandler,
} from "react";
import styles from "../../styles/co2.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConchaMeiggsTraductor = () => {
  const [textoMeiggsFinal, setTextoMeiggsFinal] = useState<string>("");
  const [textoHumanoFinal, setTextoHumanoFinal] = useState<string>("");

  const dictionary = {
    a: "co2",
    b: "es",
    c: "o2",
    d: "co3",
    e: "$divorce-co2",
    f: "h2o",
    g: "ardilla🐿️",
    h: "hentai",
    i: "sexo",
    j: "ya",
    k: "co26",
    l: "mierda",
    m: "$wa",
    n: "r34",
    ñ: "La-Ñ-Gang-Cumeada-o.o",
    o: "oye",
    p: "fenix",
    q: "tonto",
    r: "callate",
    s: "asexual",
    t: "estupida",
    u: "xd",
    v: "wakko",
    w: "mongolico",
    x: "sex",
    y: "co9",
    z: "o24",
    0: "jkasf",
    1: "follar",
    2: "pero",
    3: "cow",
    4: "buscar",
    5: "incesto-wakko",
    6: "khondii",
    7: "pico",
    8: "cosmo",
    9: "grosero",
    ":": "linda",
    "/": "teta",
    ".": "wtf",
    "-": "loops",
    '"': "idiota",
    "<": "con",
    ">": "._.xd",
    "=": "co",
    "?": "respeta",
    "¿": "del",
    "!": "imbecil",
    "¡": "malcriado",
    ",": "gay",
    "@": "pelotudo",
    "'": ":mipatco2:",
    "`": "que-te-pasa",
    "´": "carajo",
    ";": "cum",
    "(": "yakko-cum",
    ")": "animal",
    "[": "po",
    "]": "desgraciado",
    "{": "conchetumare",
    "}": "pudrete",
    "#": "sans",
    "%": "papu",
    _: "castroso",
    $: "cresta",
    " ": "poto",
  };
  const notify = () => toast("copiado al portapapeles");

  const encode: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textoSeparado = event.target.value
      .toLowerCase()
      .normalize("NFD")
      .split("")
      .map((letra) => dictionary[letra as keyof typeof dictionary]);
    setTextoMeiggsFinal(textoSeparado.join(" "));
  };

  const getKeyByValue = (value: string) => {
    return Object.keys(dictionary).find(
      (key) => dictionary[key as keyof typeof dictionary] === value
    );
  };

  const decode: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textoSeparado =
      event.target.value.split(" ").map((palabra) => getKeyByValue(palabra)) ||
      "?sin_definición";
    setTextoHumanoFinal(textoSeparado.join(""));
  };

  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text)
    notify();
  };

  return (
    <>
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h1 className="title">Normal a Co2</h1>
        <img
          src="https://cdn.discordapp.com/emojis/773654997044822026.gif?size=96"
          alt=""
        />
        <div className={styles.traductor}>
          <div>
            <textarea placeholder="Ingresar algo" onChange={encode} />
          </div>
          <div>
            <textarea
              className={styles.readonlyTextarea}
              placeholder="Resultado"
              value={textoMeiggsFinal}
              readOnly
              onClick={() => copyToClipBoard(textoMeiggsFinal)}
            />
          </div>
        </div>

        <h1 className="title">Co2 a normal</h1>
        <div className={styles.traductor}>
          <div>
            <textarea placeholder="Ingresar algo" onChange={decode} />
          </div>
          <div>
            <textarea
              className={styles.readonlyTextarea}
              placeholder="Resultado"
              value={textoHumanoFinal}
              readOnly
              onClick={() => copyToClipBoard(textoHumanoFinal)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConchaMeiggsTraductor;
