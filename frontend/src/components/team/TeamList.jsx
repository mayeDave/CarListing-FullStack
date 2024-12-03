import { useEffect, useState } from 'react';
import TeamCard from './TeamCard'
import AddTeamForm from '../addcar/AddTeamForm';

const TeamList = () => {
    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)"
        }
    }
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    

    const fetchData = async () => {
        const url = 'https://api.github.com/users';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setLoading(false);
            setUser(data);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    

    useEffect(() => {
        fetchData();
    }, []);
    
    // Add new team to the list and update the state
    const addTeam = (newTeam) => {
        setUser((prevUsers) => {
            const updatedUsers = [...prevUsers, { 
                id: `${prevUsers.length + 1}`, 
                login: newTeam.name, 
                html_url: newTeam.link, 
                avatar_url: newTeam.imgUrl || 'https://via.placeholder.com/150' 
            }];
            
            
    
            return updatedUsers;  // Return the updated list to set it in state
        });
            

            };

    
    
    
  return (
    <div>
        <h2>Car Bay Team</h2>
        
        {loading && <p>Loading...</p>}
        <div style={styles.grid}>
            {user.map((user) => (
                <TeamCard
                    key={user.id}
                    imgUrl={user.avatar_url}
                    username={user.login}
                    link={user.html_url}
                />
            ))}
        </div>
        <AddTeamForm addTeam={addTeam} />
    </div>
  )
}

export default TeamList