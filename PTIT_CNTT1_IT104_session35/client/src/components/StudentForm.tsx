import { Form, Input, Button } from "antd";
import { useEffect } from "react";

interface Props {
  onSubmit: (values: { student_name: string; email: string }) => void;
  initialValues?: { student_name: string; email: string };
}

const StudentForm: React.FC<Props> = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) form.setFieldsValue(initialValues);
    else form.resetFields();
  }, [initialValues]);

  return (
    <Form form={form} onFinish={onSubmit} layout="inline" style={{ marginBottom: 10 }}>
      <Form.Item name="student_name" rules={[{ required: true, message: "Nhập tên" }]}>
        <Input placeholder="Tên" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: "Nhập email" }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? "Cập nhật" : "Thêm"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentForm;
