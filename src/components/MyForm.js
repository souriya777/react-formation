import { useState } from "react"

function MyForm() {
    const [name, setName] = useState("") 
    const [bio, setBio] = useState("") 
    const [tech, setTech] = useState("") 

    function handleSubmit(e) {
        e.preventDefault();
        console.log("name : " + name);
        console.log("bio : " + bio);
        console.log("tech : " + tech);
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="Nom" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <textarea name="bio" placeholder="biographie" onChange={(e) => setBio(e.target.value)} />
        </div>
        <div>
            <select value={tech} name="tech" onChange={(e) => setTech(e.target.value)}>
                <option value="">Librairie/Framework préféré</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
            </select>
        </div>
        <input type="submit" value="Submit" />
    </form>
    )


}

export default MyForm