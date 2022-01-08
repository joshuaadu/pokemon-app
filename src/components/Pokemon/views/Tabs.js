import React from "react";
import classes from "./Tabs.module.css";

const Tabs = (props) => {
  const { activeTab, setActiveTab } = props;
  console.log(activeTab);
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      key: index,
      className: `${classes.tab} ${+activeTab === index ? classes.active : ""}`,
      onClick: () => setActiveTab(index)
    });
  });
  return <div className={classes.tabs}>{children}</div>;
};

export default Tabs;
