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
      <table className="m-3" border={1} cellPadding={10} cellSpacing={0}>
        <tr>
          <td className="text-danger">Number A: </td>
          <td>
            <input
              type="text"
              value={null}
              onChange={(e) => setA(e.target.value)}
              className="py-1 px-3 m-2 w-100 d-block"
              placeholder="Enter a value"
            />
          </td>
          <td className="text-success">
            {a > 0 ? (
              <h1>A is greated than 0</h1>
            ) : (
              <h1>A is less than or equal to 0</h1>
            )}
          </td>
        </tr>
        <tr>
          <td className="bg-dark text-light p-2">Number B: </td>
          <td>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </td>
          <td className="bg-light">
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
      <div>
        <div></div>
        {obj && <img class="rounded float-end img-fluid" src={obj.img} />}
      </div>
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
        className="btn btn-outline-primary m-3"
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
      <div className="row justify-content-around">
        <div className="col-3 border m-1">A</div>
        <div className="col-3 border m-1">B</div>
        <div className="col-3 border m-1">C</div>
        <div className="col-3 border m-1">D</div>
        <div className="col-3 border m-1">E</div>
        <div className="col-3 border m-1">F</div>
      </div>
      <div className="row justify-content-around my-3">
        <div className="col-3 border text-end">1</div>
        <div className="col-3 border row">
          <div className="col-8 border text-center">2</div>
          <div className="col-4 border text-start">3</div>
        </div>
        <div className="col-3 border text-center">4</div>
      </div>
    </>
  );
}
