import BlogImg from "../../assets/images/blogImg1.png";

import {
  StyledBlog,
  Img,
  BlockBlog,
  NameOfSection,
  LinkAllBlogs,
  Title,
  Description,
  LinkReadMore,
  AboutBlog,
  Item,
  List,
} from "./Blog.styled.js";

const Blog = ({ blogs }) => {
  return (
    <>
      {blogs.blog.map((blog) => (
        <StyledBlog key={blog.id}>
          {/* <Img src={blog.img} alt={`Blog ${blog.id}`} /> */}
          <Img src={BlogImg} />
          <AboutBlog>
            <BlockBlog>
              <NameOfSection>Блоги</NameOfSection>
              <LinkAllBlogs href="#">Все блоги</LinkAllBlogs>
            </BlockBlog>
            <Title>{blog.title}</Title>
            <Description>{blog.description}</Description>
            <Description>{blog.text}</Description>
            <List>
              <Item>
                <LinkReadMore href="#">Читать продолжение </LinkReadMore>
              </Item>
            </List>
          </AboutBlog>
        </StyledBlog>
      ))}
    </>
  );
};

export default Blog;
