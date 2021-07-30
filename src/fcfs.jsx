import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import checkInput from "./functions.jsx";

const FCFS = () => {
  useEffect(() => {
    document.title = "FCFS";
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
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const algorithm = () => {
    setET(10);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="banner">
          <div></div>
          <div class="inline-block">
            <div class="dropdown">
              <button class="dropbtn">FCFS</button>
              <div class="dropdown-content">
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
                  <Link to="/spn">SPN</Link>
                </p>
                <p class="space">
                  <Link to="/srt">SRT</Link>
                </p>
              </div>
            </div>
            <div class="inline-block">
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                First Come First Served
              </h1>
            </div>
            <div class="inline-block">
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="dropdown">
                  <Button
                    class="dropbtn"
                    onClick={
                      checkInput(AL, BL, CL, DL, EL, AT, BT, CT, DT, ET)
                        ? algorithm
                        : handleClickToOpen
                    }
                  >
                    Play
                  </Button>
                </div>
                <Dialog open={open} onClose={handleToClose}>
                  <DialogTitle style={{ background: "#282c34", color: "red" }}>
                    <b>&#9888;&nbsp;&nbsp;ERROR</b>
                  </DialogTitle>
                  <DialogContent
                    style={{ background: "#282c34", color: "red" }}
                  >
                    <DialogContentText
                      style={{ background: "#282c34", color: "red" }}
                    >
                      Los valores introducidos no permiten obtener una solución.
                      <br></br>Revise que la entrada cumple los siguientes
                      requisitos:<br></br>
                      <br></br>&nbsp;&nbsp;&nbsp;&nbsp;-<br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;-<br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;-
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    style={{ background: "#282c34", color: "red" }}
                  >
                    <Button
                      onClick={handleToClose}
                      style={{ color: "red" }}
                      autoFocus
                    >
                      <b>Close</b>
                    </Button>
                  </DialogActions>
                </Dialog>
              </h1>
            </div>
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
export default FCFS;
