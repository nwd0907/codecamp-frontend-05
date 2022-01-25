import { useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  return (
    <>
      <button onClick={showModal}>우편번호 검색</button>
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
    </>
  );
}
