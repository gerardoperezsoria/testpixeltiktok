import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import imagex from '../images/ec.svg';
import logoless from '../images/logoless.png';
// import videopresentacion from '../images/videopresentacion.mp4'

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

export default function HeroBullets() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Certificate y emprende tu negocio FORMAL
                        </Title>
                        <Title color="dimmed" mt="md" style={{ color: 'red' }}>
                            Avalado por SEP-CONOCER
                        </Title>
                        {/* <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={12} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>TypeScript based</b> – build type safe applications, all components and hooks
                                export types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                any project
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                        </List> */}

                        {/* <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get started
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Source code
                            </Button>
                        </Group> */}
                    </div>
                    <Image src={logoless.src} className={classes.image} width="600" height="600"/>
                    {/* <iframe width="560" height="315" 
                    src={videopresentacion} 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <video
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '80vh',
                            backgroundColor: 'black',
                            color: 'white'
                        }}
                        loop
                        controls
                        controlsList="nodownload"
                        // poster="https://assets.codepen.io/6093409/river.jpg"
                        autoplay
                    >
                        <source
                            src={`https://www.youtube.com/embed/65wDP9o6s-U`}
                            type="video/mp4"
                        />
                    </video> */}
                </div>
            </Container>
        </div>
    );
}