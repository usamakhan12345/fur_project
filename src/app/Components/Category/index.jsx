import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import styles from './style.module.scss'
import Image from 'next/image';
import SofaImage from "../../../assets/sofaSet.webp"
import doubleBed from "../../../assets/doubleBeds.webp"
import OfcTable from "../../../assets/officeTable.webp"
import ofcChair from "../../../assets/ofcChair.webp"
import DiningTable from "../../../assets/Dining-Table.webp"

const Category = () => {
    return (
        <>
            <Typography className={styles.categoryHeading} variant='h4' component='h3'>
                BROWSE OUR CATEGORIES
            </Typography>
            <div className={styles.categoryWraper}>
                <div className={styles.itemHead}>
                    <Image src={SofaImage} height={250} width={250} className={styles.itemImage} />
                  <h2>Sofa Sets</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={doubleBed} height={250} width={250} className={styles.itemImage} />
                    <h2>Double Beds</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={OfcTable} height={250} width={250} className={styles.itemImage} />
                    <h2>Office Table</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={ofcChair} height={250} width={250} className={styles.itemImage} />
                    <h2>Office Chair</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={SofaImage} height={250} width={250} className={styles.itemImage} />
                    <h2>Sofa Sets</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={DiningTable} height={250} width={250} className={styles.itemImage} />
                    <h2>Dining Table</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={SofaImage} height={250} width={250} className={styles.itemImage} />
                    <h2>Sofa Sets</h2>
                </div>
                <div className={styles.itemHead}>
                    <Image src={SofaImage} height={250} width={250} className={styles.itemImage} />
                    <h2>Sofa Sets</h2>
                </div>

            </div>
        </>
    )
}

export default Category 