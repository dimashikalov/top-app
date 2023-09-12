import { useContext, useState } from "react";
import cn from "classnames";
import styles from "./Menu.module.css";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";
import { motion, useReducedMotion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  // const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  // const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route} aria-expanded={m.id == firstCategory}>
            <Link href={`/${m.route}`} legacyBehavior>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu &&
          menu.map((m) => {
            if (
              m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
            ) {
              m.isOpened = true;
            }
            return (
              <div key={m._id.secondCategory}>
                <div
                  className={styles.secondLevel}
                  onClick={() => openSecondLevel(m._id.secondCategory)}
                >
                  {m._id.secondCategory}
                </div>

                <motion.div
                  layout
                  variants={variants}
                  initial={m.isOpened ? "visible" : "hidden"}
                  animate={m.isOpened ? "visible" : "hidden"}
                  className={cn(styles.secondLevelBlock)}
                >
                  {buildThirdLevel(m.pages, menuItem.route)}
                </motion.div>
              </div>
            );
          })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`} legacyBehavior>
          <a
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]:
                `/${route}/${p.alias}` == router.asPath,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.li>
    ));
  };

  return <div>{buildFirstLevel()}</div>;
};
