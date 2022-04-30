import { Box, Fab, Modal, Tooltip, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, Videocam } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        title='Add'
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor='background.default'
          color='text.primary'
        >
          <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
          <UserBox>
            <Avatar src='https://i.pinimg.com/564x/09/74/ec/0974ec05aa3baa8f7a3198b328cb56f1.jpg' />
            <Typography variant='span' fontWeight={500}>John Doe</Typography>

          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <Videocam color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
