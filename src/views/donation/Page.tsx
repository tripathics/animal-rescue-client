import React from "react";

import styles from "./Donation.module.scss";
import donateBtn from "../../assets/donate.svg";
import PageHeader from "@/components/layouts/PageHeader/PageHeader";
import Modal from "@/components/ui/Modal/Modal";
import SchemaForm from "@/components/forms";
import cx from "classnames"
import { useState } from "react";

const donarsList = [
    {donarName:"Help merry", orgImg:"./animals/goat2.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.bluecross.org.uk/"},
    {donarName:"Please help poor cat", orgImg:"./animals/cat.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.humaneamerica.org/"},
    {donarName:"Kindly support them", orgImg:"./animals/cat2.webp", orgDesc:"Thank you for your anonymous donation to support and help these poor sick animals.", orgLink:"https://www.humanesociety.org/"},
    {donarName:"Please help poor cow", orgImg:"./animals/cow1.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:""},
    {donarName:"Help this mother dog", orgImg:"./animals/dogs_sick.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.humanesociety.org/"},
    {donarName:"Please help them", orgImg:"./animals/dogs3.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:""},
    {donarName:"Take care to them", orgImg:"./animals/goat3.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.humanesociety.org/"},
    {donarName:"Please help me", orgImg:"./animals/cow3.jpg", orgLink:"https://www.humanesociety.org/", orgDesc:"Your one donation can save a life of these poor animals. 1 Rs may change to 1 life"},
    {donarName:"Hey human help us", orgImg:"./animals/cat4.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.humanesociety.org/"},
    {donarName:"Hello sir help me ", orgImg:"./animals/dogs2.jpg", orgDesc:"Thank you for supporting and helping these poor sick animals.", orgLink:"https://www.theapsca.org/"},
]

type OrganisationCardData= {
    donarName: string;
    orgImg: string;
    orgDesc: string;
    orgLink: string;

}

interface IOrganisationCardProps {
    data: OrganisationCardData;
    setIsPostModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Donars :React.FC <IOrganisationCardProps>= ({data,setIsPostModalOpen}) => {

    return (
        <>    
        <div className={styles["card"]}>
            <div className={styles["imgBox"]}>
                <img src={data.orgImg} alt="img" />
            </div>
            <div className={styles["content"]}>
                <h3>{data.donarName}</h3>
                <p>{data.orgDesc}</p>
            </div>
            <button className={styles["btn"]} onClick={()=>{
                setIsPostModalOpen(true);
            }} >
            <img src={donateBtn} alt="donate" />
            <h4>Donate Now</h4> 
            </button>
        </div>
        </>
    )
}
const DonationPage:React.FC = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    
    return (
        <React.Fragment>
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
        <div className={styles["grid-box"]}>
            {
                donarsList.map((org, index) => {
                    return (
                        <Donars data={org} setIsPostModalOpen={setIsPostModalOpen}  key={index}/>
                    )
                })
            }
        </div>
        <Modal
        modalTitle="Donate Now"
        setIsOpen={setIsPostModalOpen}
        isOpen={isPostModalOpen}
      >
        <div className={styles.donationForm}>
          <div className={styles.donationForm}>
            <SchemaForm
              schema={[
                {
                  name: "description",
                  type: "textarea",
                  required: "Description is required",
                  label: "Write your post",
                },
                 
               
              ]}
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </div>
        </div>
      </Modal>

        </React.Fragment>
    );
}
export default DonationPage;