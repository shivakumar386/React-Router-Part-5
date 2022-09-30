// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'
// import './index.css'

// class TeamMatches extends Component {
//   state = {match: {}, latestMatch: {}, recentMatches: [], isLoading: true}

//   componentDidMount() {
//     this.getMatchDetails()
//   }

//   getMatchDetails = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params
//     const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
//     const matchDetails = await response.json()
//     const updatedMatchDetails = {
//       teamBannerUrl: matchDetails.team_banner_url,
//       latestMatchDetails: matchDetails.latest_match_details,
//       recentMatches: matchDetails.recent_matches,
//     }
//     this.setState({match: updatedMatchDetails})

//     const updatedLatestMatches = {
//       umpires: updatedMatchDetails.latestMatchDetails.umpires,
//       result: updatedMatchDetails.latestMatchDetails.result,
//       manOfTheMatch: updatedMatchDetails.latestMatchDetails.man_of_the_match,
//       id: updatedMatchDetails.latestMatchDetails.id,
//       date: updatedMatchDetails.latestMatchDetails.date,
//       venue: updatedMatchDetails.latestMatchDetails.venue,
//       competingTeam: updatedMatchDetails.latestMatchDetails.competing_team,
//       competingTeamLogo:
//         updatedMatchDetails.latestMatchDetails.competing_team_logo,
//       firstInnings: updatedMatchDetails.latestMatchDetails.first_innings,
//       secondInnings: updatedMatchDetails.latestMatchDetails.second_innings,
//       matchStatus: updatedMatchDetails.latestMatchDetails.match_status,
//     }

//     const updatedRecentMatches = updatedMatchDetails.recentMatches.map(
//       eachMatch => ({
//         umpires: eachMatch.umpires,
//         result: eachMatch.result,
//         manOfTheMatch: eachMatch.man_of_the_match,
//         id: eachMatch.id,
//         date: eachMatch.date,
//         venue: eachMatch.venue,
//         competingTeam: eachMatch.competing_team,
//         competingTeamLogo: eachMatch.competing_team_logo,
//         firstInnings: eachMatch.first_innings,
//         secondInnings: eachMatch.second_innings,
//         matchStatus: eachMatch.match_status,
//       }),
//     )
//     this.setState({
//       latestMatch: updatedLatestMatches,
//       recentMatches: updatedRecentMatches,
//       isLoading: false,
//     })
//   }

//   render() {
//     const {id, match, latestMatch, recentMatches, isLoading} = this.state

//     let backColor
//     if (id === 'RCB' || id === 'SRH') {
//       backColor = 'red'
//     }

//     return (
//       <div className={`${backColor} match-container`}>
//         {isLoading ? (
//           <div testid="loader">
//             <Loader type="Oval" color="#ffffff" height={50} width={50} />
//           </div>
//         ) : (
//           <div className="match-container">
//             <img src={match.teamBannerUrl} alt="kkr" />
//             <h1>Latest Matches</h1>
//             <LatestMatch latestMatch={latestMatch} />
//             <ul className="match-ul">
//               {recentMatches.map(eachMatch => (
//                 <MatchCard recentMatches={eachMatch} key={eachMatch.id} />
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// export default TeamMatches

import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: {
        id: fetchedData.latest_match_details.id,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({matchesData: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderRecentMatchesList = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
