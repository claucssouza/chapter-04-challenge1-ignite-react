import { Image, UnorderedList, ListItem } from '@chakra-ui/react';
import styles from './nav.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Nav = () => {

    return (
        <>
            <nav
                className={styles.desktop}
            >
                <Image src="/images/cocktail.svg" w='85rem' h='85rem' />
                <Image src="/images/surf.svg" w='85rem' h='85rem' />
                <Image src="/images/building.svg" w='85rem' h='85rem' />
                <Image src="/images/museum.svg" w='85rem' h='85rem' />
                <Image src="/images/earth.svg" w='85rem' h='85rem' />
            </nav>
            <nav
                className={styles.mobile}
            >
                <UnorderedList
                    w='228rem'
                    justifyContent='space-around'
                    marginTop='48rem'
                    flexWrap='wrap'
                    display='flex'
                >
                    <ListItem fontSize='18rem'>vida noturna</ListItem>
                    <ListItem fontSize='18rem'>praia</ListItem>
                    <ListItem fontSize='18rem'>moderno</ListItem>
                    <ListItem fontSize='18rem'>clássico</ListItem>
                    <ListItem fontSize='18rem'>e mais...</ListItem>
                </UnorderedList>
            </nav>
            <hr className={styles.hr} />
            <section>
                <p className={styles.section}>Vamos nessa? <br /> Então escolha seu continente </p>
            </section>
        </>
    );
}

export { Nav };