import TwoColLayout from "@/components/layouts/twocol";
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import styles from "./Home.module.scss";
import cx from "classnames";
import { Post, PostsContainer } from "@/components/ui/Post";

// dummy list of organizations that rescue animals
const dummyOrganizations = [
  {
    id: 1,
    name: "Organization 1",
    url: "https://example.com",
  },
  {
    id: 2,
    name: "Organization 2",
    url: "https://example.com",
  },
  {
    id: 3,
    name: "Organization 3",
    url: "https://example.com",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <PageHeader bgImage="hero.png">
        <div className={cx(styles.header)}>
          <div className={styles["header-content"]}>
            <h1 className={styles.heading}>Live and let live</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              rerum eos laborum tempore expedita ab quo, consequuntur quidem
              labore doloribus fuga enim consectetur nobis consequatur aperiam
              adipisci asperiores perferendis in!
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="__page-content container">
        <TwoColLayout
          sidebar={
            <div>
              <h3>Find help nearby</h3>
              <div>
                <ul>
                  {dummyOrganizations.map((org) => (
                    <li key={org.id}>
                      <a href={org.url}>{org.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        >
          <div>
            <PostsContainer>
              <Post
                description="hello world"
                userName="Alice"
                pictures={[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/200",
                  "https://via.placeholder.com/300",
                  "https://via.placeholder.com/500",
                ]}
              />
            </PostsContainer>
          </div>
        </TwoColLayout>
      </div>
    </>
  );
};

export default Home;
