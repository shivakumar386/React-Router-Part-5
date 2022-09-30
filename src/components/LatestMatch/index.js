// import './index.css'

// const LatestMatch = props => {
//   const {latestMatch} = props
//   const {
//     competingTeam,
//     competingTeamLogo,
//     date,
//     firstInnings,
//     id,
//     manOfTheMatch,
//     matchStatus,
//     result,
//     secondInnings,
//     umpires,
//     venue,
//   } = latestMatch
//   return (
//     <div className="latest-match-container">
//       <div className="latest-first">
//         <h1 className="first-heading"> {competingTeam}</h1>
//         <h3 className="first-heading">{date}</h3>
//         <p className="first-para">{venue}</p>
//         <p className="first-para">{result}</p>
//       </div>
//       <img
//         src={competingTeamLogo}
//         alt={`latest match ${competingTeam}`}
//         className="latest-logo"
//       />
//       <div className="latest-second">
//         <p>First Innings</p>
//         <p className="second-headings">{firstInnings}</p>
//         <p>Second Innings</p>
//         <p className="second-headings">{secondInnings}</p>
//         <p>Man of the match</p>
//         <p className="second-headings">{manOfTheMatch}</p>
//         <p>Umpires</p>
//         <p className="second-headings">{umpires}</p>
//       </div>
//     </div>
//   )
// }

// export default LatestMatch

// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-status">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
