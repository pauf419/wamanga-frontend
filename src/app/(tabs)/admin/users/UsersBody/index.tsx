"use client";

import type { User } from "@/api/types/user";
import { GridMini } from "../../styled";
import UserListUnit from "../components/UserListUnit";
import Input from "@/components/Input";
import { useState } from "react";

interface Props {
  users: User[];
}

const UsersBody = ({ users }: Props) => {
  const [search, setSearch] = useState<string>();

  return (
    <>
      <Input
        type="input"
        placeholder="Поиск"
        onChange={(value) => setSearch(value)}
      />
      <GridMini>
        {users
          .filter((user) => (search ? user.username.includes(search) : true))
          .map((user) => (
            <UserListUnit user={user} key={user._id} />
          ))}
      </GridMini>
    </>
  );
};

export default UsersBody;
