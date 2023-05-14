import { BuyMeCoffee, Cover, Section, SocialNetworks, Title } from "@/components";

export default function Home() {
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
