const Comment =(props) =>{
    const {postId,id,name,email} = props
    return(
        <div className={'comment'}>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>

        </div>
    );
};
export default Comment;