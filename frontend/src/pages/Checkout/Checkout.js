import React from 'react'
import { BillingDetails } from '../../components/BillingDetails/BillingDetails'
import { Order } from '../../components/Order/Order'
import { Grid } from '@mantine/core';

function Checkout() {
  return (
    // <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", margin: "4rem" }}>
    <Grid>
      <Grid.Col span={8} order={3} orderSm={1} orderLg={2}><BillingDetails /></Grid.Col>
      <Grid.Col span={4} order={2} orderSm={1} orderLg={3} style={{ marginTop: "4.7rem" }}><Order /></Grid.Col>
    </Grid>


    // </div>
  )
}

export default Checkout