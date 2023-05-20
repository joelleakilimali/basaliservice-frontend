import React from "react";
import { Card, Button } from "antd";
const { Meta } = Card;
function CardService() {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://via.placeholder.com/300x200"
          style={{ height: 200 }}
        />
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Meta title="Card Title" description="Card description" />
        <Button type="primary">Read More</Button>
      </div>
    </Card>
  );
}

export default CardService;
