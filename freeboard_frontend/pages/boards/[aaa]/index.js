import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { 
    Avatar, 
    AvatarWrapper, 
    Body, 
    BottomWrapper, 
    Button, 
    CardWrapper, 
    Contents, 
    CreatedAt, 
    Header, 
    IconWrapper, 
    Info, 
    LinkIcon, 
    Title, 
    Wrapper, 
    Writer 
} from "../../../styles/emotion2";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, { 
      variables: { boardId: String(router.query.aaa) } 
  });

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{data?.fetchBoard.writer}</Writer>
              <CreatedAt>{data?.fetchBoard.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            <LinkIcon src="/images/board/detail/link.png" />
          </IconWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard.title}</Title>
          <Contents>{data?.fetchBoard.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
