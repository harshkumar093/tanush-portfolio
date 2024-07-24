import { useEffect, useState } from "react";
import Header from "../components/Header";

function ProjectForm(props) {
  const {
    a = 0,
    b = 0,
    setA = () => {},
    setB = () => {},
    showImg,
    obj,
  } = props;
  return (
    <form>
      <table>
        <tr>
          <td>Number A: </td>
          <td>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </td>
          <td>
            {a > 0 ? (
              <h1>A is greated than 0</h1>
            ) : (
              <h1>A is less than or equal to 0</h1>
            )}
          </td>
        </tr>
        <tr>
          <td>Number B: </td>
          <td>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </td>
          <td>
            {b > 0 ? (
              <h1>B is greater than 0</h1>
            ) : b == 0 ? (
              <h1>B is equal to 0</h1>
            ) : (
              <h1>B is less than 0</h1>
            )}
          </td>
        </tr>
      </table>
      {obj && <img src={obj.img} />}
    </form>
  );
}

export default function Project() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [obj, setObj] = useState(null); // null = false, {} = true
  let timer = null;
  useEffect(() => {
    console.log("useEffect without dependency list");
  });
  useEffect(() => {
    console.log("useEffect with empty dependency list");
    timer = setInterval(() => {
      console.log("timer on");
    }, 1000);
    return clearInterval(timer);
  }, []);
  useEffect(() => {
    console.log("useEffect with dependency list as a", a);
  }, [a]);
  useEffect(() => {
    console.log("useEffect with dependency list as b", b);
  }, [b]);
  useEffect(() => {
    console.log("useEffect with dependency list as a,b", a, b);
  }, [a, b]);
  return (
    <>
      <Header />
      <button
        onClick={() =>
          obj
            ? setObj(null)
            : setObj({
                img: `https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750`,
              })
        }
      >
        Show
      </button>
      <ProjectForm a={a} b={b} setA={setA} setB={setB} showImg={showImg} />
      <ProjectForm setA={setA} setB={setB} obj={obj} />
    </>
  );
}
