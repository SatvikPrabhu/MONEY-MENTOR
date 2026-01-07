import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles.css';

function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 4,          
        px: 3
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        className="typewriter-text"
        align="center"
      >
        Welcome to MoneyMentor
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 700, mb: 4 }}
      >
        Your personal finance companion. Get financial advice, tools, and loan
        options to help you achieve your financial goals.
      </Typography>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {[
          {
            title: 'Loan Calculator',
            desc: 'Easily calculate your monthly payments, interest rates, and more.',
            link: '/loanpage',
            btn: 'Start Calculating',
          },
          {
            title: 'Budget Planner',
            desc: 'Track your expenses and set budgets to achieve your financial goals.',
            link: '/budgetplanner',
            btn: 'Start Planning',
          },
          {
            title: 'Investment Guide',
            desc: 'Learn the basics of investing and how to make your money work for you.',
            link: '/investmentguide',
            btn: 'Start Learning',
          },
          {
            title: 'Credit Score Checker',
            desc: 'Check your credit score and learn how to improve it.',
            link: '/creditscore',
            btn: 'Check Score',
          },
          {
            title: 'Savings Calculator',
            desc: 'Plan your savings goals and track your progress.',
            link: '/savingscalculator',
            btn: 'Calculate Now',
          },
          {
            title: 'Tax Estimator',
            desc: 'Estimate your tax return and make informed decisions.',
            link: '/taxestimator',
            btn: 'Estimate Taxes',
          },
        ].map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                width: 345,
                boxShadow: 3,
                borderRadius: 2,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" component={Link} to={item.link}>
                  {item.btn}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
