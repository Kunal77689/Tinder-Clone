import "./App.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
function App() {
  return (
    <div className="App">
      <IconButton>
        <PersonIcon fontSize="large" className="icon" />
      </IconButton>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.rbnndQRyfyrBSjqFntOMvQHaEK&pid=Api&P=0&w=319&h=179"
        alt="tinder logo"
        className="logo"
      ></img>
      <IconButton>
        <ForumIcon fontSize="large" className="icon"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default App;
