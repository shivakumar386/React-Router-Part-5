// import {Link} from 'react-router-dom'

// import './index.css'

// const TeamCard = props => {
//   const {iplTeams} = props
//   const {id, name, teamImageUrl} = iplTeams
//   return (
//     <Link to={`/ipl/${id}`} className="link-elements">
//       <li className="team-list-elements">
//         <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
//         <h1 className="team-heading">{name}</h1>
//       </li>
//     </Link>
//   )
// }

// export default TeamCard

// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, imageUrl, id} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img className="team-card-image" src={imageUrl} alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
