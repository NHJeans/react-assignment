import { NotFoundContainer, NotFoundMessage, HomeButton } from "./style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundMessage>
        404 Error : 페이지를 찾을 수 없습니다.!!!!!!
      </NotFoundMessage>
      <HomeButton to="/">홈으로 가기</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
