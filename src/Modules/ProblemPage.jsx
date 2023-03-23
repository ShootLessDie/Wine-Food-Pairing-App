import { Box, Container } from '@mui/material'
import React from 'react'

const ProblemPage = () => {
  return (
    <Container
      maxWidth="1"
      sx={{ height: "80vh", width: "80%" , borderRadius: "10px", 
      boxShadow: 2 }}
      className="containerClass"
    >
          <Box sx={{display: 'flex' ,alignItems: "center", justifyContent: 'center', height:"100%", flexDirection: 'column'}}>
          <h1>The Wine & Food Pairing App</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
          </Box>

    </Container>
  )
}

export default ProblemPage