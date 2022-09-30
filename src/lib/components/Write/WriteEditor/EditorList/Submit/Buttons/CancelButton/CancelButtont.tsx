import DefaultButton from "../../../../../../../components/common/Buttons/DefaultButton";
import useWrite from "../../../../../../../write/useWrite";

const CancelButton = () => {
  const { reset } = useWrite();
  return (
    <DefaultButton
      onClick={() => {
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
