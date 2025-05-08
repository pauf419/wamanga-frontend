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
  const [dynamicUsers, setDynamicUsers] = useState<User[]>(users);

  const updateUser = (user: User) => {
    setDynamicUsers((prev) => {
      return prev.map((_user) => {
        if (_user._id === user._id) {
          return user;
        }
        return _user;
      });
    });
  };

  return (
    <>
      <Input
        type="input"
        placeholder="Поиск"
        onChange={(value) => setSearch(value)}
      />
      <GridMini>
        {dynamicUsers
          .filter((user) => (search ? user.username.includes(search) : true))
          .map((user) => (
            <UserListUnit user={user} key={user._id} updateUser={updateUser} />
          ))}
      </GridMini>
    </>
  );
};

export default UsersBody;
