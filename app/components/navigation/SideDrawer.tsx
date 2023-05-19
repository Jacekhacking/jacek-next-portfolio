const SideDrawer = (props: any) => {
  return (
    <div className="side-drawer-container" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default SideDrawer;
