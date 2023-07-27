import {
    Avatar,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    Button,
    Portal,
    Paper,
    CloseButton,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import './profile.css'


export default function Profile() {
    return (
        <>
            <ScrollArea className="card" style={{ height: "100vh" }}>
                <h1>Past Order</h1>
                <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>

                            <th />
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <Group spacing="sm">
                                <Avatar size={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-3382ZgdUhzsOz0VYE8KVNtX_HTwTxRSps08Nli1&s' radius={15} />
                                <Text fz="sm" fw={500}>
                                    1
                                </Text>
                            </Group>
                        </td>

                        <td>
                            <Anchor component="button" size="sm">
                                $200
                            </Anchor>
                        </td>
                        <td>
                            <Text fz="sm" c="dimmed">
                                {" "}
                                12
                            </Text>
                        </td>
                        <td>
                            <Group spacing={0} position="right">
                                <ActionIcon color="red">
                                    <IconTrash
                                        size="1rem"
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Group>
                        </td>
                    </tr>
                </Table>

            </ScrollArea>
            <Link to="/checkout" >
                <div style={{ marginTop: "0.5rem", marginLeft: "66rem", marginRight: "auto", textDecoration: "none" }}>
                    <Button

                        radius="md"
                        size="md"
                        style={{ backgroundColor: "#BC9470" }}
                        variant="gradient"
                        border="md"
                        gradient={{ from: "#bc9470", to: "beige" }}
                    >
                        Checkout
                    </Button>
                </div>
            </Link>
        </>
    );
}