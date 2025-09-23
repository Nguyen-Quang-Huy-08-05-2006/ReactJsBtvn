import { Table, Button } from "antd";

interface Student {
  id: number;
  student_name: string;
  email: string;
}

interface Props {
  students: Student[];
  onDelete: (id: number) => void;
  onEdit: (student: Student) => void;
}

const StudentTable: React.FC<Props> = ({ students, onDelete, onEdit }) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "student_name", key: "student_name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Hành động",
      key: "actions",
      render: (_: any, record: Student) => (
        <>
          <Button onClick={() => onEdit(record)} style={{ marginRight: 5 }}>
            Sửa
          </Button>
          <Button danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </>
      )
    }
  ];

  return <Table rowKey="id" dataSource={students} columns={columns} pagination={false} />;
};

export default StudentTable;
