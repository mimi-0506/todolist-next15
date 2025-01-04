import { mainDatas } from "@/types/types";
import Item from "./Item";

export default function StateBasedContent({
  array,
  name,
}: {
  array: mainDatas[];
  name: string;
}) {
  if (array.length)
    return array.map((now: mainDatas) => {
      return <Item value={now} key={now.name} />;
    });
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
