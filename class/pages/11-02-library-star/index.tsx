import { Rate } from "antd";
import { useState } from "react";

export default function LibraryRatePage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}
