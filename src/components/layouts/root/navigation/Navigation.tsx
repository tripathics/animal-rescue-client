import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import cx from "classnames";
import { Menu as MenuIcon, User as UserIcon } from "iconoir-react";
import useUser from "@/hooks/user";
import NavLi, { NavLiProps } from "./NavLi";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Avatar from "@/components/ui/Avatar/Avatar";
import { UserRole } from "@/types/User.type";

const Navbar: React.FC = () => {
  const { loading, user, logout } = useUser();

  const links = [
    { label: "Home", href: "/" },
    { label: "Organizations", href: "/organizations" },
    { label: "Rescue", href: "/rescue" },
    { label: "Donate", href: "/donate" },
    { label: "About", href: "/about" },
  ];

  interface userLinksType extends NavLiProps {
    noAuth?: boolean;
    rolesVislbleTo?: UserRole[];
  }
  const userLinks: userLinksType[] = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Profile", href: "/profile", rolesVislbleTo: ["user", "org"] },
    {
      label: "Rescue requests",
      href: "/rescue-requests",
      rolesVislbleTo: ["org"],
    },
    {
      label: "Logout",
      href: "/",
      action: logout,
      type: "button",
      rolesVislbleTo: ["user", "org"],
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={cx(styles["nav-container"], "container")}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src="/navbar-banner.svg" alt="NIT AP Alumni" height={80} />
          </NavLink>
        </div>
        <div className={styles["nav-content"]}>
          <ul className={styles["nav-list"]}>
            {links.map((link, index) => (
              <NavLi key={index} {...link} />
            ))}
          </ul>
          <div className={styles["nav-toggles"]}>
            <Dropdown
              position="right"
              toggle={() => (
                <button
                  type="button"
                  aria-label="Menu"
                  id={styles.menuToggle}
                  className={styles["menu-btn"]}
                >
                  <MenuIcon width={22} height={22} strokeWidth={2} />
                </button>
              )}
              render={({ setIsOpen }) => (
                <div className={cx(styles["collapsable-nav"], "container")}>
                  <hr />
                  <ul className={styles["collapsable-nav-list"]}>
                    {links.map((link, index) => (
                      <NavLi
                        key={index}
                        {...link}
                        action={() => setIsOpen(false)}
                      />
                    ))}
                  </ul>
                </div>
              )}
            />
            {loading ? (
              <div
                className={styles["spinner"]}
                aria-label="Loading auth status"
              ></div>
            ) : (
              <Dropdown
                position="right"
                toggle={() => (
                  <button
                    id={styles.userToggle}
                    type="button"
                    aria-label="Profile"
                    style={user?.avatar ? { border: "none" } : {}}
                    className={styles["profile-btn"]}
                  >
                    {user?.avatar ? (
                      <Avatar size="100%" avatar={user?.avatar} />
                    ) : (
                      <UserIcon />
                    )}
                  </button>
                )}
                render={({ setIsOpen }) => (
                  <div className={cx(styles["collapsable-nav"], "container")}>
                    {user && (
                      <div className={styles["user-info"]}>
                        {user.avatar && (
                          <Avatar avatar={user.avatar} size="6rem" />
                        )}
                        <div className={styles["user-name-wrapper"]}>
                          {user.first_name ? (
                            <div className={styles["user-name"]}>
                              {`${user.first_name} ${user.last_name}`}
                            </div>
                          ) : (
                            <div className={styles["message"]}>
                              Please complete your profile
                            </div>
                          )}
                        </div>
                        <div className={styles["user-email"]}>{user.email}</div>
                      </div>
                    )}
                    <hr />
                    <ul className={styles["collapsable-nav-list"]}>
                      {userLinks
                        .filter(({ rolesVislbleTo }) => {
                          if (!user) return !rolesVislbleTo;
                          return rolesVislbleTo?.some((role) =>
                            user.role.includes(role)
                          );
                        })
                        .map((link) => (
                          <NavLi
                            key={link.href}
                            {...link}
                            action={() => {
                              setIsOpen(false);
                              link.action && link.action();
                            }}
                          />
                        ))}
                    </ul>
                  </div>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
