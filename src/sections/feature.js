/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Support,
    altText: "Group Chat",
    title: "Group Chat",
    text:
      "This is one of the most powerful parts of our services. Should any problems or questions arise the group chat usually knows the quick fix immediatedly.",
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: "New Technologies",
    title: "New Technologies",
    text:
      "We don't build basic cutter cookie websites and apps. Instead we go all out and dynamically deliver exactly what you want at a fantastic price.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Mentoring Students",
    title: "Mentoring Students",
    text:
      "Our Pro Master membership packages come with a great oppurtuanity to work directly with a mentor. We have graduated many successful students.",
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: "Weekly Newsletter",
    title: "Weekly Newsletter",
    text:
      "Stay up to date with the most current technologies, updates, and features. The weekly newsletter sent to your email is packed full of information.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing Useful Features"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
