
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content font-medium text-xl">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar