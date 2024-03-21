import React from "react";
import "./App.css";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import { CustomProvider } from "rsuite";
import MintNFT from "./mintnft/mintnft";
import Inventory from "./inventory/inventory";

function App() {

  return (
    <BrowserRouter>
      <CustomProvider theme="dark">
        <Navbar>
          <Navbar.Brand href="#">MY PAGE</Navbar.Brand>
          <Nav>
            <Nav.Item href="/mintnft">Mint NFT</Nav.Item>
            <Nav.Item href="/inventory">Inventory</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/mintnft" element={<MintNFT />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>

      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
