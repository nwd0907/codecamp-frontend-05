import { useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setAddress] = useState("");
  const [, setZonecode] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    onToggleModal();
  };

  return (
    <div>
      <button onClick={onToggleModal}>우편번호 검색</button>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
    </div>
  );
}
