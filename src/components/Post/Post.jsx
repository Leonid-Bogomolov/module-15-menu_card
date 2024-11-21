import React, { useState } from "react";
import './post.css'

const Post = ({ post, deletePosts, addToFavor, changePost }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [edit, setEdit] = useState(false)

    const [inputName, setInputName] = useState(post.name)
    const [inputAge, setInputAge] = useState(post.age)
    const [inputStatut, setInputStatut] = useState(post.statut)
    const [inputProfession, setInputProfesson] = useState(post.profession)
    const savePost = () => {
        const newPost = {
            id: post.id,
            name: inputName,
            age: inputAge,
            statut: inputStatut,
            profession: inputProfession
        }
        changePost(newPost)
        setEdit(false)
    }

    return (
        <div className={post.favor ? "post-favor" : "post"}>
            <img className="image" src={post.image} alt="portrait"></img>
            <div className="essence">
                <div className="essence-input name">
                    {edit ? <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                        : <h3>{post.name}</h3>
                    }
                </div>
                <div className="essence-input age">
                    {edit ? <input type="text" value={inputAge} onChange={(e) => setInputAge(e.target.value)} />
                        : <p className="font">{post.age}</p>
                    }
                </div>
                <div className="essence-input statut">
                    {edit ? <input type="text" value={inputStatut} onChange={(e) => setInputStatut(e.target.value)}/>
                         : <p className="font">{post.statut}</p>
                    }
                </div>
                <div className="essence-input profession">
                    {edit ? <input type="text" value={inputProfession} onChange={(e) => setInputProfesson(e.target.value)}/>
                         : <p className="font">{post.profession}</p>
                    }
                </div>
                {edit && <button className="btn-save" onClick={savePost}>Сохранить</button>}
                <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>МЕНЮ</button>
                {showMenu &&
                    <div className="btn-container">
                        <button className="btn-edit" onClick={() => setEdit(!edit)}>Редактировать</button>
                        <button onClick={() => addToFavor(post.id)}>Избранное</button>
                        <button onClick={() => deletePosts(post.id)}>Удалить</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Post
