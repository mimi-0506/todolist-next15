import Image from "next/image";
import "./detail.css";

export default function Item() {
  //const {text, state} = props;
  const state = true;
  const text = "비타민 챙겨 먹기";

  return (
    <div className="detailContainer dynamic">
      <div className="title">
        <Image
          src={state ? "/svg/todo.svg" : "/svg/done.svg"}
          alt="Responsive"
          width="32"
          height="32"
        />
        <p>{text}</p>
      </div>

      <div className="main">
        <div className="imageContainer">
          <Image src="/svg/empty.svg" alt="Responsive" width="64" height="64" />

          <button>
            <Image
              src="/svg/plus.svg"
              alt="Responsive"
              width="24"
              height="24"
            />
          </button>
        </div>

        <div className="textContainer">
          <h2>Memo</h2>
          <p>오메가 3, 프로폴리스, 아연 챙겨먹기</p>
        </div>
      </div>

      <div className="buttonContainer">
        <button className="modifyButton shape_1">
          <Image src="/svg/check.svg" alt="Responsive" width="16" height="16" />
          수정 완료
        </button>

        <button className="deleteButton shape_1">
          <Image src="/svg/X.svg" alt="Responsive" width="16" height="16" />
          삭제하기
        </button>
      </div>
    </div>
  );
}
