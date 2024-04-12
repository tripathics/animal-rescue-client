
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import styles from "./organisation.module.scss";
import cx from "classnames";


const dummyOrganizations = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "sharda stray foundation",
        url: "https://example.com",
        location: "Kathmandu, Nepal",
        established: " 42 jan ,2015",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Purucat House",
        url: "https://example.com",
        location: "tamilnadu, india",
        established: "24 july ,2013",

    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
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
