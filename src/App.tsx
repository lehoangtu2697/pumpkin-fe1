import './App.css';
import 'devextreme/dist/css/dx.light.css';
import useFetchPostsData from './api/posts';
import PostsDataGrid from './components/PostsDataGrid';
import Authentication from './components/Authentication';

function App() {
  const postsData = useFetchPostsData();

  return (
    <div className="App">
      <Authentication/>
      <h1 style={{paddingLeft: "20px", textAlign: "left" }}>Posts Management</h1>
      <div id="data-grid-demo" style={{ padding: "0 20px" }}>
        <PostsDataGrid dataSource={postsData} />
      </div>
    </div>
  );
}

export default App;
