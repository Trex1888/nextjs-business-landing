/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";
import Member5 from "assets/team/member-5.png";
import Member6 from "assets/team/member-6.png";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Tom Freeman",
    title: "Tom Freeman",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Jess Freeman",
    title: "Jess Freeman",
    designation: "VP and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member5,
    altText: "Tony Harper",
    title: "Tony Harper",
    designation: "Web Developer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member3,
    altText: "Aaron Elephant",
    title: "Aaron Elephant",
    designation: "Web Developer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member4,
    altText: "Trey Paste",
    title: "Trey Paste",
    designation: "Software Engineer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },

  {
    id: 6,
    imgSrc: Member6,
    altText: "Andy Grey",
    title: "Andy Grey",
    designation: "Digital Marketing",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Our Team"
          title="Meet Our Fantastic Team & Follow Their Social Media"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
