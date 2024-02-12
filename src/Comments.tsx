import React, { useEffect, useState } from "react";
import { User } from "./User";



export function Comments(){
    const [comments, setComments] = useState([] as User[]);
    const [errorMessage, setErrorMessage] = useState('');
    
    async function load() {
        try {
            const response = await fetch('http://localhost:3000/api/comments/');
            if (!response.ok) {
                setErrorMessage('Hiba a letöltéskor');
                return;
            }
            const content = await response.json() as User[];
            setComments(content);
        } catch {
            setErrorMessage('Hiba a letöltéskor');
        }
    }
    useEffect(() => {
        load();
    }, [])
    
return (
    <div>
        {comments.map(comments=>
           <>
           <table>
            <tr id="table">
                <td>
                    <img src={comments.avatar} alt="" />
                </td>
                <td>
                <a href="mailto:?subject=test&body=this is a test">{comments.email}</a>
                <br />
                <br />
                {comments.content}
                </td>
            </tr>
           </table>
           </> 
            )}
            <p>{errorMessage}</p>
    </div>
)    
}

