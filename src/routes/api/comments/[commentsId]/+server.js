import { json } from '@sveltejs/kit';
import { comments } from "$lib/comments.js"
// import { comment } from 'postcss';

// Dynamic API routes without UI
export function  GET (requestEvent){
    const {params} = requestEvent
    const { commentsId } = params
    const comment = comments.find(
        (comments) => comments.id === parseInt(commentsId)
    )  
    return json(comment)
}


// API PATCH request without UI
export async function PATCH(requestEvent){
    const {params,  request} = requestEvent
    const {commentsId} =params
    const {text} = await request.json()
    const comment = comments.find(
        (comments) => comments.id === parseInt(commentsId)
    )  
  comment.text = text;
  return json(comment) ;  
}

// API DELETE request without UI
export async function DELETE(requestEvent){
    const {params} = requestEvent
    const {commentsId} = params
     const deletedComment = comments.find(
        (comments) => comments.id === parseInt(commentsId)
    );  
    const index = comments.findIndex(
        (comments) => comments.id === parseInt(commentsId)
    )  ;
    comments.splice(index, 1);
    return json(deletedComment)
}