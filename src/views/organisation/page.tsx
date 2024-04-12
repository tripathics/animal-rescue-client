
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import styles from "./organisation.module.scss";
import cx from "classnames";

const dummyOrganizations = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWScwFdBwyd3X1wmw57yx0uOIaHgKRMneJKf9az1zLLg&s",
        name: "sharda stray foundation",
        url: "https://example.com",
        location: "Kathmandu, Nepal",
        established: " 42 jan ,2015",
    },
    {
        id: 2,
        image: "https://dynamic.brandcrowd.com/asset/logo/3a3f54e6-3f66-47cd-90c6-32fc7c92fcbf/large?logoTemplateVersion=1&v=638439085781441630",
        name: "Purucat House",
        url: "https://example.com",
        location: "tamilnadu, india",
        established: "24 july ,2013",

    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kTnBeoUCgUnKjCZ5zJVcqmw5a4k8G33o3hvma2_85A&s",
        name: "Chandrashaker gau shala",
        url: "https://example.com",
        location: "koyom batur, indonesia",
        established: " 31 feb ,2010",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHZbYSXoWT8oGLBXzjWPk-NlID7XJYtCV7j_yOYiLNQ&s",
        name: "sharda stray foundation",
        url: "https://example.com",
        location: "Kathmandu, Nepal",
        established: " 42 jan ,2015",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksP8KGtG4jZviU3GaWLQVc600H_xi28dC-A&s",
        name: "Purucat House",
        url: "https://example.com",
        location: "tamilnadu, india",
        established: "24 july ,2013",

    },
    {
        id: 6,
        image: "https://l450v.alamy.com/450v/2dkttc4/animal-shelter-flat-icon-color-simple-element-from-volunteering-collection-creative-animal-shelter-icon-for-web-design-templates-infographics-and-2dkttc4.jpg",
        name: "Chandrashaker gau shala",
        url: "https://example.com",
        location: "koyom batur, indonesia",
        established: " 31 feb ,2010",
    },
];

const Organisation: React.FC = () => {
    return (
        <>
            <PageHeader bgImage="hero.jpeg">
                <div className={cx(styles.header)}>
                    <div className={styles["header-content"]}>
                        <h1 className={styles.heading}>Not Every Heros wears A CAPE</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                            rerum eos laborum tempore expedita ab quo, consequuntur quidem

                        </p>
                    </div>
                </div>
            </PageHeader>

            <div className="__page-content container">

                <div className={styles.Orgcontainer}>
                    <h1>Organizations.</h1>
                    <hr />
                    <div className={styles.Orgshow}>
                        <ul>
                            {dummyOrganizations.map((org) => (
                                <li key={org.id}>
                                    <img src={org.image} alt={org.name} />
                                    <div>
                                        <h2>{org.name}</h2>
                                        <h3>{org.location}</h3>
                                        <p>{org.established}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Organisation;
