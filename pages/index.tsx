import React, { useState } from "react";
import {
  BuyMeCoffee,
  Cover,
  Post,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
} from "@/components";

import { loadPosts } from "./api/posts";

const LOAD_MORE_STEP = 4;

export default function Home(initialPosts: any, total: any) {

  const [posts, setPosts] = useState(initialPosts);
  console.log("hello world");
  return (
    <div>
      <Section>
        <Cover title="Liia<br /> Zubova" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {/* {posts.map((post: any)=>(
            <Post key={post.slug.current} {...post} />
          ))} */}
        </PostGrid>

      </Section>
    </div>
  );

}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
