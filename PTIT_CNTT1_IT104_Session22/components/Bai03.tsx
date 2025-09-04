import React from "react";
import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;

export default function Bai03() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="MacBook Air 2018" src="https:../" />}
            actions={[
              <Button type="primary">Xem chi tiết</Button>,
              <span style={{ padding: "8px", fontWeight: "bold" }}>
                30.000.000 đ
              </span>,
            ]}
          >
            <Meta
              title="MacBook Air 2018"
              description="The reason I am selling the machine is because it is too much power for what I need"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="MacBook Pro 2019" src="../" />}
            actions={[
              <Button type="primary">Xem chi tiết</Button>,
              <span style={{ padding: "8px", fontWeight: "bold" }}>
                30.000.000 đ
              </span>,
            ]}
          >
            <Meta
              title="MacBook Pro 2019"
              description="The reason I am selling the machine is because it is too much power for what I need"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
