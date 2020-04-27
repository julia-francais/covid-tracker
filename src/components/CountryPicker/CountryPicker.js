import React, { useState, useEffect } from "react"
import { FormControl } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"

import styles from "./CountryPicker.module.css"

import { fetchCountries as fetchCountriesFromApi } from "../../api"
import { Autocomplete } from "@material-ui/lab"

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await fetchCountriesFromApi())
    }

    fetchCountries()
  }, [setCountries])

  return (
    <FormControl className={styles.formControl}>
      {countries.length > 1 && (
        <Autocomplete
          id="combo-box-demo"
          options={countries}
          onChange={(e, value) => handleCountryChange(value)}
          getOptionLabel={option => option}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label="Select a country"
              variant="outlined"
            />
          )}
        />
      )}
    </FormControl>
  )
}

export default CountryPicker
