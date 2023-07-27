import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem, Container, Grid, SimpleGrid } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { PaginationProduct } from '../../components/products/PaginationProduct';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        cursor: 'pointer',
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: rem(5),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));

const mockdata = [
    { label: '4 passengers', icon: IconUsers },
    { label: '100 km/h in 4 seconds', icon: IconGauge },
    { label: 'Automatic gearbox', icon: IconManualGearbox },
    { label: 'Electric', icon: IconGasStation },
];

export function AllProducts({ selectedOption, search, show }) {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));


    const [product, setProduct] = useState([])

    // console.log(selectedOption)
    // console.log(search)
    // console.log(show)

    //Sort Product
    if (selectedOption === 'Default sorting') {
        product.sort((a, b) => a.id - b.id);
    } else if (selectedOption === 'Sort by Oldest') {
        product.sort((a, b) => b.id - a.id);

    } else if (selectedOption === 'Sort by highest price') {
        product.sort((a, b) => a.price - b.price);

    } else if (selectedOption === 'Sort by lowest price') {
        product.sort((a, b) => b.price - a.price);

    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [selectedOption])


    //Pagination Product
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = show
    const lastIndex = currentPage * recordsPerPage
    const firstlndex = lastIndex - recordsPerPage
    const records = product.slice(firstlndex, lastIndex);
    const npage = Math.ceil(product.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    //filter Product and show Product
    const getProduct = records.filter(item => {
        if (search && item.title.toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        return !search;
    })
        .map(item => {
            return (
                <Grid gutter="md" key={item.id}>
                    <Grid.Col >
                        <Card withBorder radius="md" className={classes.card} >
                            <Card.Section className={classes.imageSection}>
                                <Link to={`/singleProduct/${item.id}`}><Image src={item.image} alt="Tesla Model S" height='200' style={{ width: '100%' }} /></Link>
                            </Card.Section>

                            <Group position="apart" mt="md">
                                <div>
                                    <Text fw={500}>Tesla Model S</Text>
                                    <Text fz="xs" c="dimmed">
                                        Free recharge at any station
                                    </Text>
                                </div>
                                <Badge variant="outline">25% off</Badge>
                            </Group>

                            <Card.Section className={classes.section}>
                                <Group spacing={30}>
                                    <div>
                                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                                            ${item.price}
                                        </Text>
                                        <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                                            per day
                                        </Text>
                                    </div>

                                    <Button radius="xl" style={{ flex: 1 }}>
                                        Add to cart
                                    </Button>
                                </Group>
                            </Card.Section>
                        </Card>
                    </Grid.Col>
                </Grid>
            )
        });

    return (
        <Container my="md" size='xl'>
            <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {getProduct}
            </SimpleGrid>
            <PaginationProduct pageNmbers={numbers} setCurrentPage={setCurrentPage} />
        </Container>
    );
}

