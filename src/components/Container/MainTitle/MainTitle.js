import React from 'react'

 class MainTitle extends React.Component {
  render() {
    const { percentLoading } = this.props
    return (
      <div className='main-title'>
        <h1>k{percentLoading}n</h1>
      </div>
    )
  }
 }

export default MainTitle