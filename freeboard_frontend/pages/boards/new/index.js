import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  UploadButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error
} from "../../../styles/emotion";
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from "next/router";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardsNew() {
  const router = useRouter()

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }
  }
  
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }
  }

  async function onClickSubmit() {
    if (myWriter === "") {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (myPassword === "") {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (myTitle === "") {
      setMyTitleError("제목을 입력해주세요.");
    }
    if (myContents === "") {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents,
            },
          },
        })
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        console.log(error.message)
      }
    }
  }

  return (
      <Wrapper>
          <Title>게시판 등록</Title>
          <WriterWrapper>
          <InputWrapper>
              <Label>작성자</Label>
              <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeMyWriter} />
              <Error>{myWriterError}</Error>
          </InputWrapper>
          <InputWrapper>
              <Label>비밀번호</Label>
              <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangeMyPassword} />
              <Error>{myPasswordError}</Error>
          </InputWrapper>
          </WriterWrapper>
          <InputWrapper>
              <Label>제목</Label>
              <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeMyTitle} />
              <Error>{myTitleError}</Error>
          </InputWrapper>
          <InputWrapper>
              <Label>내용</Label>
              <Contents placeholder="내용을 작성해주세요." onChange={onChangeMyContents} />
              <Error>{myContentsError}</Error>
          </InputWrapper>
          <InputWrapper>
              <Label>주소</Label>
              <ZipcodeWrapper>
                  <Zipcode placeholder="07250" />
                  <SearchButton>우편번호 검색</SearchButton>
              </ZipcodeWrapper>
              <Address />
              <Address />
          </InputWrapper>
          <InputWrapper>
              <Label>유튜브</Label>
              <Youtube placeholder="링크를 복사해주세요." />
          </InputWrapper>
          <ImageWrapper>
              <Label>사진첨부</Label>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
              <UploadButton>+</UploadButton>
          </ImageWrapper>
          <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
          </OptionWrapper>
          <ButtonWrapper>
          <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
          </ButtonWrapper>
      </Wrapper>
  );
}
