import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Pets, Mail, Notifications } from '@mui/icons-material'
import React, { useState } from 'react'
import { Box } from '@mui/system'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '5px',
  width: '40%'
}))
/* bordeRadius: theme.shape.borderRadius */
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>MATERIAL UI</Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://i.pinimg.com/736x/72/02/f6/7202f6aca43d2882d43ba3c71e2dfd33.jpg'
            onClick={e => setOpen(true)}
          />
        </Icons>

        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://i.pinimg.com/736x/72/02/f6/7202f6aca43d2882d43ba3c71e2dfd33.jpg'
            onClick={e => setOpen(true)}
          />
          <Typography variant='span'>John Doe</Typography>
        </UserBox>

      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
