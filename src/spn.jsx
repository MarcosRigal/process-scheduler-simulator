import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SPN = () => {
  useEffect(() => {
    document.title = "SPN";
  });
  const [AL, setAL] = useState(1);
  const [BL, setBL] = useState(1);
  const [CL, setCL] = useState(1);
  const [DL, setDL] = useState(1);
  const [EL, setEL] = useState(1);
  const [AT, setAT] = useState(1);
  const [BT, setBT] = useState(1);
  const [CT, setCT] = useState(1);
  const [DT, setDT] = useState(1);
  const [ET, setET] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <div id="banner">
          <div class="inline-block">
            <div class="dropdown">
              <button class="dropbtn">SPN</button>
              <div class="dropdown-content">
                <p class="space">
                  <Link to="/fcfs">FCFS</Link>
                </p>
                <p class="space">
                  <Link to="/rr">RR</Link>
                </p>
                <p class="space">
                  <Link to="/mpq">MPQ</Link>
                </p>
                <p class="space">
                  <Link to="/fmpq">FMPQ</Link>
                </p>
                <p class="space">
                  <Link to="/srt">SRT</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="inline-block">
            <h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Shortest Process Next
            </h1>
          </div>
          <div class="inline-block">
            <h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </h1>
          </div>
        </div>
        <table class="table">
          <tbody class="tableBody">
            <tr>
              <th class="th">Proceso</th>
              <th class="th">Llegada</th>
              <th class="th">Tº CPU</th>
              <th class="th">Tº Inicio</th>
              <th class="th">Tº Fin</th>
              <th class="th">Tº Estancia</th>
              <th class="th">Tº Espera</th>
            </tr>
            <tr>
              <th class="th">A</th>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setAL(AL > 1 ? AL - 1 : AL)}
                >
                  -
                </button>
                &nbsp;{AL}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setAL(AL > 18 ? AL : AL + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setAT(AT > 1 ? AT - 1 : AT)}
                >
                  -
                </button>
                &nbsp;{AT}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setAT(AT > 18 ? AT : AT + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="th">B</th>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setBL(BL > 1 ? BL - 1 : BL)}
                >
                  -
                </button>
                &nbsp;{BL}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setBL(BL > 18 ? BL : BL + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setBT(BT > 1 ? BT - 1 : BT)}
                >
                  -
                </button>
                &nbsp;{BT}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setBT(BT > 18 ? BT : BT + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="th">C</th>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setCL(CL > 1 ? CL - 1 : CL)}
                >
                  -
                </button>
                &nbsp;{CL}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setCL(CL > 18 ? CL : CL + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setCT(CT > 1 ? CT - 1 : CT)}
                >
                  -
                </button>
                &nbsp;{CT}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setCT(CT > 18 ? CT : CT + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="th">D</th>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setDL(DL > 1 ? DL - 1 : DL)}
                >
                  -
                </button>
                &nbsp;{DL}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setDL(DL > 18 ? DL : DL + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setDT(DT > 1 ? DT - 1 : DT)}
                >
                  -
                </button>
                &nbsp;{DT}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setDT(DT > 18 ? DT : DT + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="th">E</th>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setEL(EL > 1 ? EL - 1 : EL)}
                >
                  -
                </button>
                &nbsp;{EL}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setEL(EL > 18 ? EL : EL + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">
                <button
                  class="minusButton"
                  onClick={() => setET(ET > 1 ? ET - 1 : ET)}
                >
                  -
                </button>
                &nbsp;{ET}&nbsp;
                <button
                  class="plusButton"
                  onClick={() => setET(ET > 18 ? ET : ET + 1)}
                >
                  +
                </button>
              </td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table class="table">
          <tbody class="tableBody">
            <tr>
              <th class="thh"></th>
              <th class="thh">1</th>
              <th class="thh">2</th>
              <th class="thh">3</th>
              <th class="thh">4</th>
              <th class="thh">5</th>
              <th class="thh">6</th>
              <th class="thh">7</th>
              <th class="thh">8</th>
              <th class="thh">9</th>
              <th class="thh">10</th>
              <th class="thh">11</th>
              <th class="thh">12</th>
              <th class="thh">13</th>
              <th class="thh">14</th>
              <th class="thh">15</th>
              <th class="thh">16</th>
              <th class="thh">17</th>
              <th class="thh">18</th>
              <th class="thh">19</th>
            </tr>
            <tr>
              <th class="thh">A</th>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="thh">B</th>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="thh">C</th>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="thh">D</th>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
            <tr>
              <th class="thh">E</th>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
              <td class="td">&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table class="table">
          <tbody class="tableBody">
            <tr>
              <th class="th">&nbsp;</th>
              <th class="th">&nbsp;</th>
              <th class="th">&nbsp;</th>
              <th class="th">&nbsp;</th>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
};
export default SPN;
