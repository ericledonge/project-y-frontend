import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavItem = ({ item }) => {
  return (
    <Link href={item.href}>
      <a
        className={classNames(
          item.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    </Link>
  );
};

export default NavItem;
