import { useState } from "react";
import styles from "./Post.module.scss";
import Avatar from "../Avatar/Avatar";
import { ArrowLeft, ArrowRight, Heart, Plus } from "iconoir-react";
import Button from "../Elements/Button";
import useUser from "@/hooks/user";
import Modal from "../Modal/Modal";
import SchemaForm from "@/components/forms";
import { Link } from "react-router-dom";

export const PictureCarousel: React.FC<{ pictures: string[] }> = ({
  pictures,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={styles.pictures}>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt="carousel"
          style={{
            display: index === activeIndex ? "block" : "none",
          }}
        />
      ))}
      <Button className={styles.scrollBtn} onClick={handlePrev}>
        <ArrowLeft />
      </Button>
      <Button className={styles.scrollBtn} onClick={handleNext}>
        <ArrowRight />
      </Button>
    </div>
  );
};

export const Post: React.FC<{
  userName: string;
  description: string;
  pictures?: string[];
}> = ({ userName, description, pictures }) => {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <Avatar size="2.2rem" />
        <p className={styles.userName}>{userName}</p>
      </header>
      <main className={styles.main}>
        <p className={styles.description}>{description}</p>
        {pictures && <PictureCarousel pictures={pictures} />}
      </main>
    </div>
  );
};

export const CreatePost: React.FC = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className={styles.createPost}>
      <Button
        variant="secondary"
        onClick={() => {
          setIsPostModalOpen(true);
        }}
        className={styles.createPostBtn}
      >
        <Plus fontSize={"2rem"} />
      </Button>
      <p>Create a post</p>

      <Modal
        modalTitle="Create new post"
        setIsOpen={setIsPostModalOpen}
        isOpen={isPostModalOpen}
      >
        <div className={styles.createPostModal}>
          <div className={styles.createPostForm}>
            <SchemaForm
              schema={[
                {
                  name: "description",
                  type: "textarea",
                  required: "Description is required",
                  label: "Write your post",
                },
                {
                  name: "post-type",
                  type: "radio",
                  required: "Post type is required",
                  label: "Select post type",
                  options: [
                    { label: "Post", value: "Post" },
                    { label: "Donation", value: "donation" },
                  ],
                },
                {
                  name: "pictures",
                  type: "file",
                  multiple: true,
                  allowedFormats: ["image/png", "image/jpeg", "image/webp"],
                  label: "Photos",
                },
              ]}
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Rescue: React.FC = () => {
  return (
    <div className={styles.rescue}>
      <Link to="/rescue">
        <Button
          variant="secondary"
          onClick={() => {
            console.log("Rescue");
          }}
          className={styles.rescueBtn}
        >
          <Heart color="black" strokeWidth="1.2" fontSize={"1.8rem"} />
        </Button>
      </Link>
      <p>Rescue</p>
    </div>
  );
};

export const PostsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();

  return (
    <div className={styles.postsContainer}>
      <div className={styles.sidebar}>
        {user?.role.includes("org") ? <CreatePost /> : <Rescue />}
      </div>
      <div className={styles.posts}>{children}</div>
    </div>
  );
};
