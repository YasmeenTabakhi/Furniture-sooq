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

const data = {
  data: [
    {
      image: "https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAAAAA?pid=ImgDet&rs=1",
      item: "iPhone 14",
      price: "$800.00",
      quantity: "1",
      id:1,
    },
    {
      image: "https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAAAAA?pid=ImgDet&rs=1",
      item: "iPhone 14",
      price: "$800.00",
      quantity: "1",
      id:2,
    },
    {
      image: "https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAAAAA?pid=ImgDet&rs=1",
      item: "iPhone 14",
      price: "$800.00",
      quantity: "1",
      id:3,
    },
  ],
};
export default function ShoppingCart() {
  const rows = data.data.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={100} src={item.image} radius={15} />
          <Text fz="lg" fw={500} className="product-title">
            {item.item}
          </Text>
        </Group>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.price}
        </Anchor>
      </td>
      <td>
        <Text>
          <QuantityInput />
        </Text>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.price}
        </Anchor>
      </td>
      <td>
        <Group spacing={0} position="right">
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
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
