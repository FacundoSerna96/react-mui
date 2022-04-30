import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil'
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star'
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike'
    }
  ]

  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={6}>
          <Avatar alt='Remy Sharp' src='https://www.pngkey.com/png/detail/123-1235372_50730114-anime-reaction-faces-png.png' />
          <Avatar alt='Travis Howard' src='https://animesher.com/orig/1/133/1337/13373/animesher.com_thumbs-anime-girl-screenshot-1337328.jpg' />
          <Avatar alt='Cindy Baker' src='https://i.pinimg.com/564x/ae/f4/e2/aef4e27dd9a4d2fed7f0925c01e303c9.jpg' />
          <Avatar alt='Agnes Walker' src='https://i.pinimg.com/originals/1e/64/4b/1e644bf04395d746c7a6f7f143c9d5ea.jpg' />
          <Avatar alt='Trevor Henderson' src='https://i.pinimg.com/564x/09/74/ec/0974ec05aa3baa8f7a3198b328cb56f1.jpg' />
          <Avatar alt='Trevor Henderson' src='https://i.pinimg.com/564x/09/74/ec/0974ec05aa3baa8f7a3198b328cb56f1.jpg' />
          <Avatar alt='Trevor Henderson' src='https://i.pinimg.com/564x/09/74/ec/0974ec05aa3baa8f7a3198b328cb56f1.jpg' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='https://www.pngkey.com/png/detail/123-1235372_50730114-anime-reaction-faces-png.png' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
                }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='https://i.pinimg.com/564x/09/74/ec/0974ec05aa3baa8f7a3198b328cb56f1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
          }
            />
          </ListItem>

        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
