import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSidebar = styled.div`
  width: 400px;
  height: 1800px;
  background-color: blue;
`;

const LayoutBody = styled.div``;

const HIDDEN_HEADERS = [
  "/12-06-modal-address-refactoring",
  // ...
  // ...
  // ...
];

interface IProps {
  children: ReactChild;
}
export default function Layout(props: IProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
