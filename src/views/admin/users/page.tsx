import Avatar from "@/components/ui/Avatar/Avatar";
import DataTable from "@/components/ui/Table/table";
import Tag from "@/components/ui/Tag/Tag";
import { UserRole } from "@/types/User.type";
import getUsers from "@/utils/api/getUsers";
import { useEffect, useState } from "react";

interface UserType {
  user: { name: string | null; avatar: string | null };
  email: string;
  role: UserRole[];
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        if (!data) return;
        setUsers(
          data.users.map((user) => ({
            user: {
              avatar: user.avatar,
              name: user.first_name
                ? `${user.title} ${user.first_name} ${user.last_name}`
                : null,
            },
            email: user.email,
            role: user.role,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <DataTable
        headings={["User", "Email", "Roles"]}
        rows={users.map((user) => userRow(user))}
      />
    </div>
  );
};

const userRow = (user: UserType) => {
  return [
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <Avatar size="2rem" avatar={user.user.avatar} />
      <div>{user.user.name || "User"}</div>
    </div>,
    user.email,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
      }}
    >
      {user.role.map((role, i) => (
        <Tag key={i}>{role}</Tag>
      ))}
    </div>,
  ];
};

export default Users;
