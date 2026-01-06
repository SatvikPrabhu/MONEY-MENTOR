<<<<<<< HEAD
import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles.css';
function Home() {
   return (
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3, padding: 3 }}>
           {/* Welcome message with typewriter effect */}
           <Typography
               variant="h3"
               component="h1"
               gutterBottom
               className="typewriter-text"  // Applying the typewriter effect class
           >
               Welcome to MoneyMentor
           </Typography>


           <Typography variant="body1" paragraph>
               Your personal finance companion. Get financial advice, tools, and loan options to help you achieve your financial goals.
           </Typography>


           {/* Grid Container for Cards */}
           <Grid container spacing={3} justifyContent="center">
               {/* Loan Calculator Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Loan Calculator</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Easily calculate your monthly payments, interest rates, and more.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/loanpage">Start Calculating</Button>
                       </CardActions>
                   </Card>
               </Grid>


               {/* Budget Planner Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Budget Planner</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Track your expenses and set budgets to achieve your financial goals.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/budgetplanner">Start Planning</Button>
                       </CardActions>
                   </Card>
               </Grid>


               {/* Investment Guide Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Investment Guide</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Learn the basics of investing and how to make your money work for you.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/investmentguide">Start Learning</Button>
                       </CardActions>
                   </Card>
               </Grid>


               {/* Credit Score Checker Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Credit Score Checker</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Check your credit score and learn how to improve it.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/creditscore">Check Score</Button>
                       </CardActions>
                   </Card>
               </Grid>


               {/* Savings Calculator Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Savings Calculator</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Plan your savings goals and track your progress.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/savingscalculator">Calculate Now</Button>
                       </CardActions>
                   </Card>
               </Grid>


               {/* Tax Estimator Card */}
               <Grid item xs={12} sm={6} md={4}>
                   <Card
                       sx={{
                           maxWidth: 345,
                           boxShadow: 3,
                           borderRadius: 2,
                           '&:hover': {
                               boxShadow: 6,
                               transform: 'scale(1.05)',
                               transition: 'transform 0.3s, box-shadow 0.3s',
                           },
                       }}
                   >
                       <CardContent>
                           <Typography variant="h5" component="div">Tax Estimator</Typography>
                           <Typography variant="body2" color="text.secondary">
                               Estimate your tax return and make informed decisions.
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button variant="contained" color="primary" component={Link} to="/taxestimator">Estimate Taxes</Button>
                       </CardActions>
                   </Card>
               </Grid>
           </Grid>
       </Box>
   );
}


=======
function Home() {
    return (
        <div>
            <h1>Welcome to MoneyMentor</h1>
            <p>Your personal finance companion</p>
            {/* Add your main page content here */}
        </div>
    );
}

>>>>>>> a60eceb2cffb80ff1828533db90407b1e1afe502
export default Home;