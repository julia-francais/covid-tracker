import React, { Component } from "react"
import { Link } from "gatsby"

import { Cards, Chart, CountryPicker } from "../components"
import styles from "../Index.css"
import { fetchData } from "../api"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      // <Layout>
      <div className="container">
        <SEO title="Home" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
      // </Layout>
    )
  }
}

export default IndexPage
