// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import TeamCard from '../TeamCard/index'
// import './index.css'

// class Home extends Component {
//   state = {iplTeams: [], isLoading: true}

//   componentDidMount() {
//     this.getIplTeams()
//   }

//   getIplTeams = async () => {
//     const response = await fetch('https://apis.ccbp.in/ipl')
//     const data = await response.json()
//     console.log(data)
//     const updatedTeamsData = data.teams.map(eachTeam => ({
//       id: eachTeam.id,
//       name: eachTeam.name,
//       teamImageUrl: eachTeam.team_image_url,
//     }))
//     this.setState({iplTeams: updatedTeamsData, isLoading: false})
//   }

//   render() {
//     const {iplTeams, isLoading} = this.state
//     console.log(iplTeams)
//     return (
//       <div className="bg-container">
//         {isLoading ? (
//           <div testid="loader">
//             <Loader type="Oval" color="#ffffff" height={50} width={50} />
//           </div>
//         ) : (
//           <div>
//             <div className="logo-div">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
//                 alt="ipl logo"
//                 className="logo"
//               />
//               <h1 className="main-heading">IPL Dashboard</h1>
//             </div>
//             <ul className="ul-team-elements">
//               {iplTeams.map(eachTeam => (
//                 <TeamCard iplTeams={eachTeam} key={eachTeam.id} />
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// export default Home

// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  /** the state method saves data obtained from url https://apis.ccbp.in/ipl */
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updatedData = fetchData.teams.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsData} = this.state
    return (
      <ul className="team-list-items">
        {teamsData.map(team => (
          <TeamCard key={team.id} teamData={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="header-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
