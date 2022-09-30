// import './index.css'

// const MatchCard = props => {
//   const {recentMatches} = props
//   const {
//     competingTeam,
//     competingTeamLogo,
//     id,
//     matchStatus,
//     result,
//   } = recentMatches
//   let classNameOf
//   if (matchStatus.toLowerCase() === 'won') {
//     classNameOf = 'win'
//   } else {
//     classNameOf = 'lost'
//   }

//   return (
//     <li className="match-list-elements">
//       <img src={competingTeamLogo} alt="SRH" className="match-logo" />
//       <h1 className="match-heading">{competingTeam}</h1>
//       <p className="match-para">{result}</p>
//       <h1 className={`${classNameOf} match-status`}>{matchStatus}</h1>
//     </li>
//   )
// }

// export default MatchCard

// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="match-card-logo"
          src={competingTeamLogo}
          alt={competingTeam}
        />
        <h1 className="match-card-name">{competingTeam}</h1>
        <p className="match-card-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
