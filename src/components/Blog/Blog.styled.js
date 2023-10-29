import styled from "styled-components";
import Colors from "../../ui/colors";
import { media } from "../../ui/media";

const StyledBlog = styled.section`
  display: flex;
  width: 100%;
  margin-top: 20px; /// потом поменять элементу выше на  margin-bottom
  margin-bottom: 20px;

  font-family: "GrtskPeta-Medium", sans-serif;
`;

const Img = styled.img`
  width: 50%;
  object-fit: cover;
  max-height: 600px;
  height: 100%;
  /* ${media.tablet} {
    max-height: none;
    height: auto;
  }
  ${media.mobile} {
    max-height: none;
    height: auto;
  } */
`;

const AboutBlog = styled.div`
  width: 50%;
  padding: 0 15px;
  background-color: ${Colors.blogBgColor};
`;

const BlockBlog = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-bottom: 75px;
`;

const NameOfSection = styled.h4`
  font-size: 21px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.42px;
  color: ${Colors.whiteColor};
`;

const LinkAllBlogs = styled.a`
  margin-right: 60px;

  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.28px;
  color: ${Colors.whiteColor};
  text-decoration-line: underline;
  cursor: pointer;
`;

const Title = styled.h3`
  max-width: 410px;
  width: 100%;
  margin-bottom: 40px;

  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.64px;
  color: ${Colors.whiteColor};
`;

const Description = styled.p`
  max-width: 550px;
  width: 100%;

  font-size: 14px;

  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.28px;
  color: ${Colors.blogDescriptionColor};
  margin-bottom: 20px;

  /* &:nth-child(2) {
    margin-bottom: 20px; не работает
  } */
`;

const List = styled.ul`
  margin-bottom: 40px;
`;

const Item = styled.li`
  color: ${Colors.whiteColor};
`;

const LinkReadMore = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.28px;
  color: ${Colors.whiteColor};
  text-decoration-line: underline;
  cursor: pointer;
`;

export {
  StyledBlog,
  Img,
  BlockBlog,
  NameOfSection,
  Title,
  Description,
  LinkAllBlogs,
  LinkReadMore,
  AboutBlog,
  List,
  Item,
};
