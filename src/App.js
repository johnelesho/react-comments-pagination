import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Comments from './components/Comments';
import Pagination from './components/Pagination';
import './App.css';

const App =() =>{
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(15);

  useEffect(() =>{
    const fetchComments = async()=>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setComments(res.data);
      setLoading(false);
    }
    fetchComments();
  }, []);

  //Get current comments

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  //change Page
const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="container-fluid">
      <div className="jumbotron">
      <h1 class="display-4">Comments Pagination</h1>
        <p className="lead"> A sample react project that calls an external API. It fetches data from jsonplaceholder websites.</p>
      </div>
      <h1 className="text-primary mb-3"> My Blog comments</h1>
      <Pagination commentsPerPage={commentsPerPage} totalComments={comments.length} paginate={paginate} />
      <Comments comments={currentComments} loading={loading} />
      
    </div>
  );
};

export default App;
