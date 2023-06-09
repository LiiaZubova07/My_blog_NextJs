import { Article, Content, Title } from "@/components";
import React from "react";
import styles from "./styles.module.scss";
import { client } from "@/lib/client";
import { format } from "date-fns";

const Post = ({ post }: any) => {
  
//   const date = format(new Date(post.publishedDate), "dd MMM yyyy");
  return (
    <Article backUrl="/" className={styles.post}>
      <Title className={styles.postTitle}>{post.title}</Title>
      {/* <p className={styles.postDate}>{date}</p> */}
      <Content body={post.body} />
    </Article>
  );
};
export default Post;

export async function getStaticPaths() {
  const query = `*[type == "post"] {
    slug {
        current
        }
    }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post: any) => ({
    params: {
      slug: post.current.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { slug } }: any) {
  const query = `*[_type == "post" && slug.current == '${slug}']`;

  const post = await client.fetch(query);

  return {
    props: { post },
  };
}
