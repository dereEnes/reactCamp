import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Menu size="large" inverted>
        <Container>
        <Menu.Item
          name="home"
          
        />
        <Menu.Item
          name="messages"
          
        />

        <Menu.Menu position="right">
          <CartSummary></CartSummary>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
