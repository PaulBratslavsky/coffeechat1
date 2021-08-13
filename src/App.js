import './App.css';
import { useFetchHook } from './hooks/useFetchHook'

function App() {
  const url = 'https://news-proxy-server.appspot.com/topstories'
  const [result, error, isLoading] = useFetchHook(url)

  console.log(result, error, isLoading, "from hook")

  if (isLoading) return <h2>Loading...</h2>
  return (
    <div className="App">
      put stuf here
      { error && <p>Error: {error}</p> }
      { result && 
        result.map(item => <div key={item.id}>
          <h2>{item.title}</h2>
          <hr />
        </div>)
      }
    </div>
  );
}

export default App;
