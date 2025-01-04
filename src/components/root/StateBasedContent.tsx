import { mainDatas } from "@/types/types";
import Item from "./Item";
import { motion } from "framer-motion";

export default function StateBasedContent({
  array,
  name,
}: {
  array: mainDatas[];
  name: string;
}) {
  if (array.length)
    return (
      <motion.div
        className="itemContainer"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {array.map((now) => (
          <motion.div
            key={now.name}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              bounce: 0.5,
              delay: 0.2,
            }}
          >
            <Item value={now} />
          </motion.div>
        ))}
      </motion.div>
    );
  else
    return (
      <div className="emptyContainer">
        <picture>
          <source
            srcSet={`/images/${name}/small.png`}
            media="(max-width: 375px)"
          />
          <source
            srcSet={`/images/${name}/medium.png`}
            media="(max-width: 1919px, min-width: 743px)"
          />
          <img src={`/images/${name}/big.png`} alt="Responsive" />
        </picture>

        <p>
          {name.includes("todo") ? (
            <>
              할 일이 없어요.
              <br /> TODO를 새롭게 추가해주세요!
            </>
          ) : (
            <>
              아직 다 한 일이 없어요.
              <br /> 해야 할 일을 체크해보세요!
            </>
          )}
        </p>
      </div>
    );
}
