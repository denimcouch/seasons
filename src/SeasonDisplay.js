import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

const seasonConfig = {
  summer: {
    text: "It's so hot here!",
    iconName: 'sun',
    color: 'orange'
  },
  winter: {
    text: "Brr It's SO Cold!",
    iconName: 'snowflake',
    color: 'blue'
  }
}

const getSeason = (lat, month) => {
  // determines hemisphere based on lat value
  const hemisphere = lat > 0 ? 'northern' : 'southern'

  // determines season based on month and hemisphere
  if (hemisphere === "northern") {
    return (month >= 0 && month <=2) || (month >=9 && month <= 11) ? 'winter' : 'summer'
  }

  if (hemisphere === 'southern') {
    return (month >= 0 && month <=2) || (month >=9 && month <= 11) ? 'summer' : 'winter'
  }
}

const SeasonDisplay = (props) => {
  const { lat } = props
  const season = getSeason(lat, new Date().getMonth())
  const { text, iconName, color } = seasonConfig[season]

  return (
    <Segment className={season === 'summer' ? "seasonDisplay seasonDisplay--summer" : "seasonDisplay seasonDisplay--winter"}>
      <Icon 
        className="seasonDisplay__weather-icon"
        size="massive" 
        color={ color } 
        name={ iconName }
      />
      <h2 className="seasonDisplay__title">{ text }</h2>
      <Icon 
        className="seasonDisplay__weather-icon"
        size="massive" 
        color={ color } 
        name={ iconName }
      />
    </Segment>
  )
}

export default SeasonDisplay
