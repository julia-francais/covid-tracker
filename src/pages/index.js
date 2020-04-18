import React, { Component } from "react"
import { Link } from "gatsby"

import { Cards, Chart, CountryPicker } from "../components"
import styles from "../App.module.css"
import { fetchData } from "../api"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }
  render() {
    const { data } = this.state
    return (
      // <Layout>
      <div className="container">
        <SEO title="Home" />
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
      // </Layout>
    )
  }
}

export default IndexPage
