import TwoColLayout from "@/components/layouts/twocol";
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import styles from "./Home.module.scss";
import cx from "classnames";
import { Post, PostsContainer } from "@/components/ui/Post";
import { useEffect, useState } from "react";
import { PostType } from "@/types/Post.type";
import getPosts from "@/utils/api/getPosts";
import eventEmitter from "@/config/eventEmitter.config";

// dummy list of organizations that rescue animals
const dummyOrganizations = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHZbYSXoWT8oGLBXzjWPk-NlID7XJYtCV7j_yOYiLNQ&s",
    name: "sharda stray foundation",
    url: "https://example.com",
    location: "Kathmandu, Nepal",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksP8KGtG4jZviU3GaWLQVc600H_xi28dC-A&s",
    name: "Purucat House",
    url: "https://example.com",
    location: "tamilnadu, india",
  },
  {
    id: 3,
    image:
      "https://l450v.alamy.com/450v/2dkttc4/animal-shelter-flat-icon-color-simple-element-from-volunteering-collection-creative-animal-shelter-icon-for-web-design-templates-infographics-and-2dkttc4.jpg",
    name: "Chandrashaker gau shala",
    url: "https://example.com",
    location: "koyom batur, indonesia",
  },
];

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const posts = await getPosts();
    if (posts) {
      setPosts(posts.posts);
    }
  };
  useEffect(() => {
    eventEmitter.on("postCreated", () => {
      fetchPosts();
    });

    fetchPosts();

    return () => {
      eventEmitter.off("postCreated");
    };
  }, []);

  return (
    <>
      <PageHeader bgImage="hero.png">
        <div className={cx(styles.header)}>
          <div className={styles["header-content"]}>
            <h1 className={styles.heading}>Live and let live</h1>
            <p>
              Detested by so many, yet these dogs nourish the hope for love and
              affection. I've met so many of them and felt the longing of their
              souls. My Dagi, who lived as a street dog in Portugal for many
              years, means everything to me. I don't even remember how days
              without her were!
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="__page-content container">
        <TwoColLayout
          sidebar={
            <div>
              <h3>Find help nearby </h3>
              <div className={styles.sideOrg}>
                <ul>
                  {dummyOrganizations.map((org) => (
                    <li key={org.id}>
                      <img src={org.image} alt={org.name} />
                      <div>
                        <a href={org.url}>{org.name}</a>
                        <p>{org.location}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        >
          <div>
            <PostsContainer>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  description={post.description}
                  userName={post.first_name}
                  pictures={post.pictures}
                  userAvatar={post.avatar}
                />
              ))}
            </PostsContainer>
          </div>
        </TwoColLayout>
      </div>
    </>
  );
};

export default Home;
