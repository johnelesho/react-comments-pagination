import React from 'react'

const Comments = ({comments, loading}) => {
if(loading){
    return <h2>Loading..</h2>
}
const styles = {width: '20rem', height:'37rem', 'margin':'0 2rem 3rem 0rem', float:'left'};
    return(
            <div> 
                {comments.map(comment =>(
                    <div key={comment.id} className="card" style={styles}>
                    <img src="images/placeholder.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{comment.title}</h5>
                      <p class="card-text">{comment.body}</p>
                      <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                  </div>
                 
                    
                ))}
        </div>
    )
}

export default Comments;