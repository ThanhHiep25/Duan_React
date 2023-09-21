import logo from "./logo.svg";
import "./Css/App.css";
import logosetting from "./IMG/Setting.png";
import logoMi from "./IMG/Monitor.png";
import logoWin from "./IMG/Application windows.png";
import logoUser from "./IMG/User.png";
import logoPhone from "./IMG/Smartphone.png";
import logoPeople from "./IMG/People.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logosetting} className="App-logosetting"></img>
      </header>

      <body className="App-body">
        <h1 className="App-tittle">Bắt đầu cuộc họp</h1>
        <p className="App-p1">
          Bắt đầu hoặc tham gia một cuộc họp video đang diễn ra
        </p>

        <div className="group-1">
          <img src={logoMi} className="LogoMi"></img>
        </div>
        <div>
          <img src={logoWin} className="LogoWin"></img>
          <img src={logoUser} className="LogoUser"></img>
          <img src={logoPhone} className="LogoPhone"></img>
        </div>

        <div>
          <img src={logoPeople} className="LogoPeople"></img>
        </div>

        <button className="App-button">Tham gia cuộc họp</button>

        <div className="foot-sup">
          <button className="Btn-DK">Đăng ký</button>
          <button className="Btn-DN">Đăng nhập</button>
        </div>
      </body>
    </div>
  );
}

export default App;
