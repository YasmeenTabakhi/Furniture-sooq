const { Carousel } = require('@mantine/carousel');
const { useMediaQuery } = require('@mantine/hooks');
const { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container } = require('@mantine/core');

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(500),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginBottom: '15px',
    padding: rem(10),
    paddingRight: rem(100),
    // backgroundColor: '#1c7ed6',
    textTransform: 'uppercase',
  },

  category: {
    color: theme.white,
    fontWeight: 600,
    fontSize: rem(16),
    textTransform: 'uppercase',
    letterSpacing: rem(6),
    // backgroundColor: '#1c7ed6',
  },

  button: {
    height: '10%',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: rem(16),
    fontWeight: 500,
    letterSpacing: rem(4),
    lineHeight: '1.3333',
    color: 'white',
    backgroundColor: '#1c7ed6',
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }} 
      className={classes.card}
    >
      <div className={classes.content_button}>
        <Title order={3} className={classes.title}>
          <Text className={classes.category}>{category}</Text>
          {title}
        </Title>
      </div>
      <Button variant="white" className={classes.button}>
        Shop Now!
      </Button>
    </Paper>
  );
}

const data = [
  {
    key: '1',
    image:"https://th.bing.com/th/id/OIP.3t_lgUnw-B0X0XmME77wpQHaE8?pid=ImgDet&w=1000&h=667&rs=1",
    title: 'mega off',
    category: 'nature',
  },
  {
    key: '2',
    image: 'https://th.bing.com/th/id/OIP.o4QoyrK640EwuFd1c6VHGQHaHa?pid=ImgDet&w=1200&h=1200&rs=1',
    title: 'Huge Sale',
    category: 'beach',
  },
  {
    key: '3',
    image: 'https://i.pinimg.com/564x/09/9e/b6/099eb673d856602e5b2810ff97ccd95b.jpg',
    title: 'mega off',
    category: 'nature',
  },
  {
    key: '4',
    image: 'https://www.bltbangkok.com/wp-content/uploads/2023/03/unnamed.png',
    title: 'Huge Sale',
    category: 'nature',
  },
];

export  function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.key}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl">
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 1}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

// Export the component if needed
// module.exports = { CardsCarousel };
