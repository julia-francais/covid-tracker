import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import cx from "classnames"
import { capitalize } from "../../utils"

import styles from "./Cards.module.css"

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..."
  }

  console.log("confirmed", confirmed)

  const dataArray = []

  const transformData = (confirmed, deaths, recovered) => {
    dataArray.push(confirmed, deaths, recovered)
    dataArray[0].name = "infected"
    dataArray[1].name = "deaths"
    dataArray[2].name = "recovered"
    return dataArray
  }
  transformData(confirmed, deaths, recovered)

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {dataArray.map((cas, i) => {
          return (
            <Grid
              item
              key={i}
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles[cas.name])}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {capitalize(cas.name)}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={cas.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of {cas.name} cases of COVID-119
                </Typography>
              </CardContent>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards
