import React, { Component } from "react"
import { Link } from "gatsby"

import { Cards, Chart, CountryPicker } from "../components"
import styles from "../styles/Index.css"
import { fetchData } from "../api"

import { ThemeProvider } from "@material-ui/styles"

import Header from "../components/header"
import coronaImage from "../images/image.png"

import SEO from "../components/seo"

import theme from "../styles/theme"
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
      <ThemeProvider theme={theme}>
        <div className="container">
          <SEO title="Home" />
          <img
            className={styles.img}
            src={coronaImage}
            alt="COVID-19"
            style={{ marginTop: "50px" }}
          />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </ThemeProvider>
    )
  }
}

export default IndexPage
