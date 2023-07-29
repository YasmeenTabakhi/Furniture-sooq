import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(26),
        fontWeight: 900,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

export default function ResetPassword() {
    const { classes } = useStyles();

    return (
        <Container size={460} my={30}>
            <Title className={classes.title} align="center">
                Reset Password
            </Title>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput label="New Password" placeholder="me@mantine.dev" required />
                <Group position="apart" mt="lg" className={classes.controls}>
                    <Anchor color="dimmed" size="sm" className={classes.control}>
                    </Anchor>
                    <Button className={classes.control}>Reset password</Button>
                </Group>
            </Paper>
        </Container>
    );
}