/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "We use the latest and greatest technology to create lightning fast products and content.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership Deal",
    title: "Partnership Deal",
    text:
      "We love working and aligning ourselves with great businesses in the local community.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text:
      "We have lots of amazing perks and benefits when you sign up for a new Pro Master Subscription.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "We have got you covered with round the clock live technical support on stand by 24/7.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Cutting edge Innovation"
          title="Meet The Future "
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
