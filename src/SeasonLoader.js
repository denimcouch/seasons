import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const SeasonsLoader = (props) => {
  const { displaySize, msg } = props
  return (
    <Segment className='seasonDisplay'>
      <Dimmer active>
        <Loader size={displaySize}>{msg}</Loader>
      </Dimmer>
    </Segment>
  )
}

SeasonsLoader.defaultProps = {
  displaySize: "small",
  msg: "Loading..."
}

export default SeasonsLoader
