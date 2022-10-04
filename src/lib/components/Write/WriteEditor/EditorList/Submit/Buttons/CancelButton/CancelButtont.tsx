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
      <>Cancel</>
    </DefaultButton>
  );
};

export default CancelButton;
