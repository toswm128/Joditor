import DefaultButton from "lib/components/common/Buttons/DefaultButton";
import useWrite from "lib/write/useWrite";

const CancelButton = () => {
  const { reset } = useWrite();
  return (
    <DefaultButton
      onClick={() => {
        console.log("cancle");
        reset();
      }}
      isAbled={false}
      size={"M"}
    >
      <>취소</>
    </DefaultButton>
  );
};

export default CancelButton;
