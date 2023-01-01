import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

export const AccountProfile = (props) => {
  const user = {
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    city: 'Nabeul',
    country: 'Tunisie',
    jobTitle: 'Senior Developer',
    name: 'Mohamed',
  };

  return (
    <>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 64,
                mb: 2,
                width: 64
              }}
            />
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {user.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {`${user.city} ${user.country}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </>)
}
