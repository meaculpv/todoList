/* MUI */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./App.css";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import User from "./components/User"
import AddNewTodo from "./components/AddNewTodo"
import Calendar from "./components/Calendar"
import Lists from "./components/Lists"
import Todos from "./components/Todos"
import EditTodo from "./components/EditTodo"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    /* Apply dark theme from MUI */
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <div className="App">
          <Sidebar>
            <User />
            <AddNewTodo />
            <Calendar />
            <Lists />
          </Sidebar>
          <Main>
            <Todos />
            <EditTodo />
          </Main>
        </div>
      </CssBaseline>
    </ThemeProvider>

  );
}

export default App;
