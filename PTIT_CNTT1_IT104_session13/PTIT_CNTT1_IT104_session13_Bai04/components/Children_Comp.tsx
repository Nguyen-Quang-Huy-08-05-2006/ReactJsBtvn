import React from "react";

type Props = {
  name: string;
};

function Children_Comp(props: Props) {
  return (
    <div>
      <h3>Họ và tên bên component con: {props.name}</h3>
    </div>
  );
}

export default Children_Comp;
