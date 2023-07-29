import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { QuantityInput } from "../Quantity/Quantity";



export default function ShoppingCart({ userInfo }) {


  const rows = userInfo.cart.map((item, index) => (
    <tr key={index + 1}>
      <td>
        <Group spacing="sm">
          <Avatar size={100} src={item.productImage.url} radius={15} />
        </Group>
      </td>
      <td>
        <Anchor component="button" size="xl" style={{ color: 'black', textDecoration: 'none' }}>
          {item.title}
        </Anchor>
      </td>
      <td>
        <Text>
          <QuantityInput quantity={item.quantity} />
        </Text>
      </td>
      <td>
        <Anchor component="button" size="sm">
          $ {item.price * item.quantity}
        </Anchor>
      </td>
      <td>
        <Group spacing={0} position="left">
          <ActionIcon color="red">
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return (
    <ScrollArea className="card">
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th> Quantity</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
