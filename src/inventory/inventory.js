import React, { useState } from "react";
import { Panel, Placeholder, Row, Col, Button, Grid } from "rsuite";
import { Table } from "rsuite";
import data from "./data";
import "./styles.css";
const { Column, HeaderCell, Cell } = Table;

const Card = ({ element, ...props }) => (
  <Panel
    shaded
    bordered
    bodyFill
    style={{ display: "inline-block", width: 240 }}
  >
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel>
      <div className="card-header">
        <p style={{ float: "left" }}>{element.item}</p>
        <p className="card-header-rarity">{element.rarity}</p>
      </div>
      <div className="card-content">
        <p>{element.currentPrice}</p>
        <p style={{ fontWeight: "300" }}>Last Sale: {element.lastSale}</p>
      </div>
    </Panel>
  </Panel>
);

const Inventory = () => {
  const [view, setView] = useState("listView");

  return (
    <Grid fluid>
      <Row style={{ margin: "10px auto" }}>
        <Button onClick={() => setView("listView")}>List view</Button>
        <Button onClick={() => setView("gridView")}>Grid view</Button>
      </Row>
      {view === "listView" ? (
        <Row style={{ display: "flex", margin: "auto", overflow: "scroll" }}>
          {data.map((element) => (
            <Col id={element.id}>
              <Card element={element} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Table height={420} data={data}>
            <Column align="center" resizable>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={100} flexGrow={1} resizable>
              <HeaderCell>Item</HeaderCell>
              <Cell dataKey="item" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Current Price</HeaderCell>
              <Cell dataKey="currentPrice" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Best Offer</HeaderCell>
              <Cell dataKey="bestOffer" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Last Sale</HeaderCell>
              <Cell dataKey="lastSale" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Rarity</HeaderCell>
              <Cell dataKey="rarity" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Owner</HeaderCell>
              <Cell dataKey="Owner" />
            </Column>

            <Column width={150} resizable>
              <HeaderCell>Time Listed</HeaderCell>
              <Cell dataKey="timeListed" />
            </Column>
          </Table>
        </Row>
      )}
    </Grid>
  );
};

export default Inventory;
