import './App.css';
import Header from './components/header';
import Container from './components/container';
import { TasksProvider } from './context/task.provider';

function App() {
  return (
<>
      <Header></Header>

      <TasksProvider>
        <Container></Container>
      </TasksProvider>
</>
  );
}

export default App;
