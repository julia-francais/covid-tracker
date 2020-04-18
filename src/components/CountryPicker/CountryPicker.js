import React, { useState, useEffect } from "react"
import { NativeSelect, FormControl } from "@material-ui/core"

import styles from "./CountryPicker.module.css"

import { fetchCountries as fetchCountriesFromApi } from "../../api"

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
      <NativeSelect
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value={""}>Global</option>

        {countries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
