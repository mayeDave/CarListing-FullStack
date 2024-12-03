import "./AddTeamForm.css"
import { useState, useEffect } from 'react'
import TeamCard from "../team/TeamCard";

const AddTeamForm = ({ addTeam }) => {
  // create useState instance for the data you want to keep track of
  const [teamName, setTeamName] = useState('');
  const [teamLink, setTeamLink] = useState('');
  const [teamImgUrl, setTeamImgUrl] = useState('');

  
  const createNewTeam = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (teamName && teamLink) {
        const newTeam = {
            name: teamName,
            link: teamLink,
            imgUrl: teamImgUrl
        };
        addTeam(newTeam); // Add new team to the list
        setTeamName('');
        setTeamLink('');
        setTeamImgUrl('');
    } else {
        alert("Please fill in all required fields!");
    }
};

  return (
    <div>
      
      <form onSubmit={createNewTeam}>
      <h1>Add Team</h1>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" onChange={(e) => setTeamName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="role">GitHub Link:</label>
            <input type="text" name="link" id="link" onChange={(e) => setTeamLink(e.target.value)} />
        </div>
        <div>
            <label htmlFor="imgUrl">Profile Image Url:</label>
            <input type="text" name="imgUrl" id="imgUrl" onChange={(e) => setTeamImgUrl(e.target.value)} />
        </div>
        <button type="submit">Add Team</button>
      </form>

      <div>
                <h3>Preview</h3>
                <TeamCard 
                    imgUrl={teamImgUrl} 
                    username={teamName} 
                    link={teamLink} 
                />
            </div>
    </div>
  )
}

export default AddTeamForm