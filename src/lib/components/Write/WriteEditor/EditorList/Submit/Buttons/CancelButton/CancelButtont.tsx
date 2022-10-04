import DefaultButton from "../../../../../../../components/common/Buttons/DefaultButton";
import useWrite from "../../../../../../../write/useWrite";

export interface ICancelButton {
  onCancle?: () => void;
}
const CancelButton = ({ onCancle }: ICancelButton) => {
  const { reset } = useWrite();
  return (
    <DefaultButton
      onClick={() => {
        onCancle && onCancle();
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
