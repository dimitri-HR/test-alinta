import React, { Component } from 'react'
import axios from 'axios';

import { getCharactersByActors } from '../../helpers'
import PageContainer from '../PageContainer'
import ActorsList from '../ActorsList'
import styles from './styles.css'

const API = '/api/Movies'
const pageTitle = `List of movie characters grouped by actor:`
const btnTitle = `Fetch data`

class App extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(API)
    .then(res => {
      this.setState({ movies: res.data })
    })
    .catch(error => {
      // Handle errors
    })
  }

  render() {
    const actors = getCharactersByActors(this.state.movies)

    return (
      <PageContainer>
        <div className={styles.container}>
          <h3>{pageTitle}</h3>
          <button onClick={this.fetchData}>{btnTitle}</button>
          <ActorsList actors={actors} />
        </div>
      </PageContainer>
    )
  }
}

export default App
