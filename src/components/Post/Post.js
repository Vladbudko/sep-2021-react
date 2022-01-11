const Post = (props) =>{
    const {userId,id,title} = props;

    return(
        <div className={'post'}>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>

        </div>
    );
};

export default Post;