import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <button onClick={showModal}>Open Modal</button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}
