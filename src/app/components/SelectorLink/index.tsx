import * as React from 'react';
import { Link } from "react-router-dom";

const SelectorLink: React.StatelessComponent<Props> = (props) => {

  let ItemToRender = () => (
    <>
      {props.children}
    </>
  );

  if (props.itemRedirect !== undefined) {
    ItemToRender = () => (
      <Link to={`/${props.itemRedirect}/${props.id}`}>
        {props.children}
      </Link>
    )
  }

  return <ItemToRender />;
}

interface Props {
  id: any,
  itemRedirect?: any;
}

export default SelectorLink;
