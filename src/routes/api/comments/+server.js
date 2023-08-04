import { json } from '@sveltejs/kit';
import { comments} from '$lib/comments.js';

export function GET(){
    return json(comments);
}

export async function POST(requestEvent){
const {request} = requestEvent;
const {text} = await request.json()
const newComment = {
    id: comments.length,
    text
};
comments.push(newComment);
console.log(newComment, "newComment")
// return new Response(JSON.stringify(newComment), {status:201});
// Or use the following
return json(newComment, { status : 201});

}
