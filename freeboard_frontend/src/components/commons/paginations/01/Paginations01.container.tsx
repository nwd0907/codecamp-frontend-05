import { MouseEvent, useEffect, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  useEffect(() => {
    setActivedPage(1);
  }, [props.isRefreshed]);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage });
    setActivedPage(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage });
    setActivedPage(startPage + 10);
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
