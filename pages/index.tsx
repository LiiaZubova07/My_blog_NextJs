import {
  BuyMeCoffee,
  Cover,
  Section,
  SocialNetworks,
  Title,
} from "@/components";

const LOAD_MORE_STEP = 4;

export default function Home({ posts }) {
  return (
    <div>
      <Section>
        <Cover title="Liia<br /> Zubova" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
};

async function loadData(start, end) {
  const query=``;
}
