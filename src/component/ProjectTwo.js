import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Reveal from './Reveal';
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import s1img from './../assets/images/projects/supplycopia-1.png';
import s2img from './../assets/images/projects/supplycopia-2.png';
import s3img from './../assets/images/projects/supplycopia-3.png';
import s4img from './../assets/images/projects/supplycopia-4.png';
import s5img from './../assets/images/projects/supplycopia-5.png';

import ism1img from './../assets/images/projects/ism-1.png';
import ism2img from './../assets/images/projects/ism-2.png';
import ism4img from './../assets/images/projects/ism-4.png';
import ism5img from './../assets/images/projects/ism-5.png';

import ds1img from './../assets/images/projects/ds-1.png';
import ds2img from './../assets/images/projects/ds-2.png';
import ds3img from './../assets/images/projects/ds-3.png';
import ds4img from './../assets/images/projects/ds-4.png';
import ds5img from './../assets/images/projects/ds-5.png';

import ttw1img from './../assets/images/projects/thetarzanway1.png';
import ttw2img from './../assets/images/projects/thetarzanway2.png';
import ttw3img from './../assets/images/projects/thetarzanway3.png';

import dra1img from './../assets/images/projects/DRA-1.png';
import dra2img from './../assets/images/projects/DRA-2.png';
import dra3img from './../assets/images/projects/DRA-3.png';


// ═══════════════════════════════════════════
// STYLED COMPONENTS
// ═══════════════════════════════════════════

const SectionWrapper = styled('div')({
    marginTop: '15vh',
    marginBottom: '10vh',
    '@media (max-width: 600px)': {
        marginTop: '8vh',
        marginBottom: '5vh',
    },
});

const SectionHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '80px',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        marginBottom: '50px',
    },
});

const ProjectHeading = styled('div')({
    fontSize: '5.5rem',
    color: '#111',
    lineHeight: 1.05,
    letterSpacing: '-2px',
    '@media (max-width: 900px)': {
        fontSize: '4rem',
    },
    '@media (max-width: 768px)': {
        fontSize: '3rem',
        letterSpacing: '-1px',
    },
    '@media (max-width: 600px)': {
        fontSize: '2.5rem',
    },
});

const SubHeading = styled('div')({
    color: "#777",
    fontSize: "16px",
    maxWidth: '300px',
    textAlign: 'right',
    lineHeight: 1.5,
    '@media (max-width: 768px)': {
        textAlign: 'left',
        maxWidth: '100%',
    },
});

// --- Featured / Hero Project Card ---
const HeroProject = styled('div')({
    borderRadius: '28px',
    overflow: 'hidden',
    background: 'linear-gradient(145deg, #0a0a1a 0%, #1a1035 40%, #0d1f3c 100%)',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    minHeight: '560px',
    position: 'relative',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease',
    boxShadow: '0 25px 80px rgba(0,0,0,0.2)',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 70% 30%, rgba(144,99,244,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
    },
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
        minHeight: 'auto',
        '& > div:first-of-type': {
            order: 2,
        },
        '& > div:last-of-type': {
            order: 1,
        },
    },
});

const HeroContent = styled('div')({
    padding: '50px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 900px)': {
        padding: '40px 30px',
    },
    '@media (max-width: 600px)': {
        padding: '30px 20px',
    },
});

const HeroNumber = styled('span')({
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '24px',
});

const HeroLabel = styled('span')({
    display: 'inline-block',
    background: 'linear-gradient(135deg, #9063F4, #517DED)',
    color: '#fff',
    padding: '7px 18px',
    borderRadius: '24px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    width: 'fit-content',
});

const HeroTitle = styled('h2')({
    color: '#fff',
    fontSize: '42px',
    margin: '0 0 20px 0',
    lineHeight: 1.15,
    letterSpacing: '-0.5px',
    '@media (max-width: 900px)': {
        fontSize: '34px',
    },
    '@media (max-width: 600px)': {
        fontSize: '26px',
    },
});

const HeroDescription = styled('p')({
    color: 'rgba(255,255,255,0.65)',
    fontSize: '16px',
    lineHeight: 1.8,
    margin: '0 0 30px 0',
    maxWidth: '450px',
    '@media (max-width: 600px)': {
        fontSize: '14px',
        lineHeight: 1.6,
        margin: '0 0 20px 0',
    },
});

const TechRow = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '36px',
});

const TechPill = styled('span')({
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.85)',
    padding: '7px 16px',
    borderRadius: '24px',
    fontSize: '12px',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.25s ease',
    '&:hover': {
        background: 'rgba(144,99,244,0.15)',
        borderColor: 'rgba(144,99,244,0.4)',
        transform: 'translateY(-2px)',
    },
    '@media (max-width: 600px)': {
        padding: '5px 12px',
        fontSize: '11px',
    },
});

const HeroLinks = styled('div')({
    display: 'flex',
    gap: '14px',
    marginTop: 'auto',
});

const HeroRole = styled('div')({
    fontSize: '14px',
    color: 'rgba(255,255,255,0.55)',
    lineHeight: 1.6,
    padding: '16px 0',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '20px',
    '& strong': {
        color: 'rgba(255,255,255,0.8)',
    }
});

const HeroLink = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '32px',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    '&.primary': {
        background: '#fff',
        color: '#0a0a1a',
        '&:hover': {
            background: '#f4f0ff',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255,255,255,0.15)',
        }
    },
    '&.secondary': {
        background: 'transparent',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.25)',
        '&:hover': {
            background: 'rgba(255,255,255,0.05)',
            borderColor: 'rgba(255,255,255,0.5)',
            transform: 'translateY(-2px)',
        }
    }
});

const HeroImageBox = styled('div')({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 40px 50px 0',
    '@media (max-width: 900px)': {
        padding: '20px 30px 40px',
        minHeight: '300px',
    },
    '@media (max-width: 600px)': {
        padding: '20px 20px 30px',
        minHeight: '220px',
    },
});

const HeroImgStack = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        minHeight: '200px',
    },
});

const HeroImg = styled('img')({
    width: '80%',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
    transition: 'transform 0.4s ease',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 600px)': {
        width: '90%',
        borderRadius: '10px',
    },
});

const HeroImgSecondary = styled('img')({
    position: 'absolute',
    width: '57%',
    borderRadius: '12px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
    bottom: '5%',
    right: '-2%',
    border: '2px solid rgba(255,255,255,0.1)',
    zIndex: 3,
    transition: 'transform 0.4s ease',
    '@media (max-width: 900px)': {
        width: '40%',
        bottom: '10%',
        right: '5%',
    },
    '@media (max-width: 600px)': {
        display: 'none',
    },
});

const HeroImgTertiary = styled('img')({
    position: 'absolute',
    width: '45%',
    borderRadius: '10px',
    boxShadow: '0 10px 35px rgba(0,0,0,0.35)',
    top: '5%',
    left: '0%',
    opacity: 0.9,
    zIndex: 1,
    transition: 'transform 0.4s ease',
    '@media (max-width: 900px)': {
        display: 'none',
    },
});

const HeroImgFourth = styled('img')({
    position: 'absolute',
    width: '47%',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
    top: '9%',
    right: '-1%',
    opacity: 0.99,
    zIndex: 0,
    transition: 'transform 0.4s ease',
    '@media (max-width: 900px)': {
        display: 'none',
    },
});

const HeroImgFifth = styled('img')({
    position: 'absolute',
    width: '50%',
    borderRadius: '8px',
    boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
    bottom: '-2%',
    left: '1%',
    opacity: 1,
    zIndex: 0,
    transition: 'transform 0.4s ease',
    '@media (max-width: 900px)': {
        display: 'none',
    },
});

// --- Showcase Row (alternating projects) ---
const ShowcaseRow = styled('div')(({ reverse }) => ({
    display: 'grid',
    gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    padding: '80px 0',
    borderBottom: '1px solid #eee',
    '&:last-child': {
        borderBottom: 'none',
    },
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
        gap: '30px',
        padding: '50px 0',
    },
    '@media (max-width: 600px)': {
        gap: '24px',
        padding: '40px 0',
    },
}));

const ShowcaseImageBox = styled('div')(({ accentColor }) => ({
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    background: accentColor || '#f8f8fc',
    padding: '40px',
    minHeight: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.4s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        '& .showcase-main-img': {
            transform: 'translateY(-8px)',
        },
        '& .showcase-float-img': {
            transform: 'translate(5px, -5px)',
        },
    },
    '@media (max-width: 900px)': {
        minHeight: '320px',
        padding: '30px',
    },
    '@media (max-width: 600px)': {
        minHeight: '220px',
        padding: '20px',
        borderRadius: '16px',
    },
}));

const ShowcaseImgWrapper = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ShowcaseImg = styled('img')({
    width: '75%',
    borderRadius: '12px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
    transition: 'transform 0.4s ease',
    position: 'relative',
    zIndex: 2,
});

const ShowcaseFloatImg = styled('img')(({ position }) => ({
    position: 'absolute',
    borderRadius: '10px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    transition: 'transform 0.4s ease',
    zIndex: position === 'front' ? 3 : 1,
    ...(position === 'back-left' && {
        width: '45%',
        top: '-35%',
        left: '0%',
        opacity: 0.9,
    }),
    ...(position === 'back-right' && {
        width: '46%',
        bottom: '-60%',
        right: '0%',
        opacity: 1,
    }),
    ...(position === 'front' && {
        width: '43%',
        bottom: '-53%',
        right: '5%',
        border: '3px solid rgba(255,255,255,0.8)',
    }),
    ...(position === 'top-right' && {
        width: '35%',
        top: '-49%',
        right: '2%',
        opacity: 1,
    }),
    ...(position === 'bottom-left' && {
        width: '30%',
        bottom: '0%',
        left: '2%',
        opacity: 0.7,
    }),
    '@media (max-width: 600px)': {
        display: 'none',
    },
}));

const ShowcaseContent = styled('div')(({ reverse }) => ({
    padding: reverse ? '0 40px 0 0' : '0 0 0 40px',
    '@media (max-width: 900px)': {
        padding: '0',
        order: 2,
    },
    '@media (max-width: 600px)': {
        padding: '0 10px',
    },
}));

const ShowcaseNumber = styled('span')({
    fontSize: '72px',
    fontWeight: 700,
    color: '#ddd',
    lineHeight: 1,
    display: 'block',
    marginBottom: '12px',
    '@media (max-width: 600px)': {
        fontSize: '48px',
    },
});

const ShowcaseDomain = styled('span')({
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 600,
    color: '#9063F4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '12px',
});

const ShowcaseTitle = styled('h3')({
    fontSize: '32px',
    color: '#111',
    margin: '0 0 16px 0',
    lineHeight: 1.2,
    letterSpacing: '-0.3px',
    '@media (max-width: 900px)': {
        fontSize: '26px',
    },
    '@media (max-width: 600px)': {
        fontSize: '22px',
    },
});

const ShowcaseDescription = styled('p')({
    fontSize: '15px',
    color: '#555',
    lineHeight: 1.75,
    margin: '0 0 24px 0',
    '@media (max-width: 600px)': {
        fontSize: '14px',
        lineHeight: 1.6,
    },
});

const ShowcaseTechRow = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
});

const ShowcaseTechTag = styled('span')({
    background: '#f4f0ff',
    color: '#6b3de8',
    padding: '6px 14px',
    borderRadius: '18px',
    fontSize: '12px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    '&:hover': {
        background: '#ebe3ff',
        transform: 'translateY(-1px)',
    }
});

const ShowcaseRole = styled('div')({
    fontSize: '14px',
    color: '#777',
    lineHeight: 1.6,
    padding: '16px 0',
    borderTop: '1px solid #eee',
    '& strong': {
        color: '#333',
    }
});

const ShowcaseLink = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '16px',
    fontSize: '14px',
    color: '#9063F4',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    '&:hover': {
        color: '#6b3de8',
        gap: '10px',
    }
});

// --- Small Projects Grid at bottom ---
const SmallProjectsSection = styled('div')({
    marginTop: '80px',
    padding: '60px 0',
    borderTop: '1px solid #eee',
    '@media (max-width: 600px)': {
        marginTop: '40px',
        padding: '40px 0',
    },
});

const SmallProjectsHeading = styled('div')({
    fontSize: '24px',
    color: '#333',
    marginBottom: '40px',
});

const SmallGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    '@media (max-width: 900px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
    },
});

const SmallCard = styled('div')({
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#fff',
    border: '1px solid #eee',
    transition: 'all 0.3s ease',
    cursor: 'default',
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
        borderColor: '#ddd',
        '& .small-card-img': {
            transform: 'scale(1.08)',
        }
    },
});

const SmallCardImgBox = styled('div')({
    height: '160px',
    overflow: 'hidden',
});

const SmallCardImg = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
});

const SmallCardContent = styled('div')({
    padding: '20px',
});

const SmallCardTitle = styled('h4')({
    fontSize: '16px',
    color: '#111',
    margin: '0 0 6px 0',
});

const SmallCardDesc = styled('p')({
    fontSize: '13px',
    color: '#888',
    margin: 0,
    lineHeight: 1.5,
});


// ═══════════════════════════════════════════
// GALLERY LIGHTBOX STYLES
// ═══════════════════════════════════════════

const GalleryOverlay = styled(motion.div)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.92)',
    backdropFilter: 'blur(10px)',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
});

const GalleryHeader = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 40px',
    zIndex: 10,
    '@media (max-width: 600px)': {
        padding: '16px 20px',
    },
});

const GalleryTitle = styled('h3')({
    color: '#fff',
    fontSize: '20px',
    margin: 0,
    letterSpacing: '-0.3px',
    '@media (max-width: 600px)': {
        fontSize: '16px',
    },
});

const GalleryClose = styled('button')({
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.2)',
        transform: 'scale(1.1)',
    },
});

const GalleryContent = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
});

const GalleryMainImage = styled(motion.img)({
    maxWidth: '80%',
    maxHeight: '70vh',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    objectFit: 'contain',
    '@media (max-width: 600px)': {
        maxWidth: '95%',
        maxHeight: '55vh',
    },
});

const GalleryNavButton = styled('button')({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.2)',
        transform: 'translateY(-50%) scale(1.1)',
    },
    '&.prev': {
        left: '20px',
    },
    '&.next': {
        right: '20px',
    },
    '@media (max-width: 600px)': {
        width: '40px',
        height: '40px',
        fontSize: '18px',
        '&.prev': { left: '8px' },
        '&.next': { right: '8px' },
    },
});

const GalleryThumbnails = styled('div')({
    position: 'absolute',
    bottom: '30px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        bottom: '16px',
        gap: '6px',
    },
});

const GalleryThumb = styled('img')(({ active }) => ({
    width: '60px',
    height: '42px',
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer',
    opacity: active ? 1 : 0.5,
    border: active ? '2px solid #fff' : '2px solid transparent',
    transition: 'all 0.2s ease',
    '&:hover': {
        opacity: 1,
    },
    '@media (max-width: 600px)': {
        width: '44px',
        height: '32px',
    },
}));

const GalleryCounter = styled('span')({
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    position: 'absolute',
    top: '80px',
    right: '40px',
    '@media (max-width: 600px)': {
        top: '60px',
        right: '20px',
        fontSize: '12px',
    },
});


// ═══════════════════════════════════════════
// GALLERY COMPONENT
// ═══════════════════════════════════════════

function ImageGallery({ images, title, isOpen, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose, handlePrev, handleNext]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <GalleryOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
            >
                <GalleryHeader onClick={(e) => e.stopPropagation()}>
                    <GalleryTitle className='poppins-semibold'>{title}</GalleryTitle>
                    <GalleryClose onClick={onClose}>✕</GalleryClose>
                </GalleryHeader>

                <GalleryCounter className='poppins-medium'>
                    {currentIndex + 1} / {images.length}
                </GalleryCounter>

                <GalleryContent onClick={(e) => e.stopPropagation()}>
                    {images.length > 1 && (
                        <GalleryNavButton className='prev' onClick={handlePrev}>‹</GalleryNavButton>
                    )}

                    <GalleryMainImage
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${title} - ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />

                    {images.length > 1 && (
                        <GalleryNavButton className='next' onClick={handleNext}>›</GalleryNavButton>
                    )}
                </GalleryContent>

                <GalleryThumbnails onClick={(e) => e.stopPropagation()}>
                    {images.map((img, i) => (
                        <GalleryThumb
                            key={i}
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                            active={i === currentIndex}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </GalleryThumbnails>
            </GalleryOverlay>
        </AnimatePresence>
    );
}


// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════

const projectsData = {
    featured: {
        id: 'supplycopia',
        number: '01',
        title: 'SupplyCopia',
        domain: 'SaaS — Healthcare Supply Chain Platform',
        description: 'A SaaS B2B platform helping all types of healthcare organizations — from acute care hospitals and non-acute care facilities to global manufacturers — gain visibility into aggregated data sets. Serving 150+ hospitals worldwide across the US, Europe, and Australia with ML-powered analytics for contract management, preference cards, vendor relationships, and dynamic reporting at scale.',
        tech: ['Angular', 'RxJS', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS', 'Amazon Redshift', 'ElasticSearch', 'AI Integration', 'GitHub Copilot', 'Claude Code'],
        role: 'Senior Software Developer — Owned entire frontend architecture, built microservices backend, designed REST APIs, managed database infrastructure (PostgreSQL + MongoDB), AI-assisted development workflows (GitHub Copilot, Claude Code), large-scale problem solving, and delivered enterprise solutions for 150+ global hospital clients.',
        images: { primary: s3img, secondary: s4img, tertiary: s1img, fourth: s2img, fifth: s5img },
        liveUrl: 'https://www.supplycopia.com/',
    },
    showcase: [
        {
            id: 'thetarzanway',
            number: '02',
            title: 'The Tarzan Way',
            domain: 'AI-Powered Travel Platform',
            description: 'An AI-powered travel planning platform featuring Kaira — a custom-built AI chatbot that understands your travel vibe and crafts personalized, bookable itineraries. Includes smart itinerary generation, transparent pricing, 24/7 AI concierge support, and partnerships with Expedia, MakeMyTrip & more.',
            tech: ['Next.js', 'React', 'Node.js', 'AI Chatbot', 'OpenAI', 'AWS', 'MongoDB', 'CloudFront', 'REST APIs'],
            role: 'Full-stack development — Built the AI chatbot (Kaira) from scratch, frontend architecture with Next.js, AI-driven itinerary engine, API integrations, responsive UI, SEO optimization, and CI/CD pipeline.',
            images: { main: ttw2img, floatLeft: ttw3img, floatRight: ttw1img },
            accent: 'linear-gradient(135deg, #e8f4f8 0%, #d4e8f0 100%)',
            liveUrl: 'https://thetarzanway.com/',
        },
        {
            id: 'isocietymanager',
            number: '03',
            title: 'iSociety Manager',
            domain: 'Facility & Society Management',
            description: 'Complete society management ecosystem — covering accounting, vendor & inventory management, security, billing, helpdesk, amenity booking, guard patrolling, boom barrier integration, and smart meter integration for residential societies.',
            tech: ['Ionic', 'React', 'Redux', 'AngularJS', 'Node.js', 'MongoDB', 'Cordova', 'Android Studio'],
            role: 'Software Developer — Built the hybrid mobile app from scratch, owned frontend & backend development with module-based architecture.',
            images: { main: ism1img, floatLeft: ism2img, floatRight: ism4img, topRight: ism5img },
            accent: 'linear-gradient(135deg, #f0f4e8 0%, #e4ecd4 100%)',
            liveUrl: 'https://factech.ai/',
        },
        {
            id: 'disaster-relief-australia',
            number: '04',
            title: 'Disaster Relief Australia',
            domain: 'Disaster Response & Emergency Management',
            description: 'National disaster response platform serving thousands of volunteers across Australia. Rebranded and re-engineered core modules for managing emergency operations, volunteer coordination, and disaster relief workflows at scale.',
            tech: ['React.js', 'Node.js', 'Microsoft Dynamics 365', 'Custom APIs', 'Figma', 'Responsive Design'],
            role: 'Software Developer — Rebranded and re-engineered core modules, integrated Microsoft Dynamics 365 with custom APIs, redesigned the entire UI from Figma, improving usability across roles and reducing manual coordination overhead.',
            images: { main: dra1img, floatLeft: dra2img, floatRight: dra3img },
            accent: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
            liveUrl: 'https://www.disasterreliefaus.org/',
        },
    ],
    others: [
        { title: 'ATrueCFO', description: 'Finance & Business Advisory platform', image: ds1img },
        { title: 'Travsolve', description: 'Travel technology consultancy site', image: ds3img },
        { title: 'Tmen Systems', description: 'IT infrastructure solutions website', image: ds4img },
    ]
};


// ═══════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════

function ProjectsTwo() {

    const { featured, showcase, others } = projectsData;
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState('');

    const openGallery = (title, images) => {
        const imageList = Object.values(images).filter(Boolean);
        setGalleryTitle(title);
        setGalleryImages(imageList);
        setGalleryOpen(true);
    };

    const closeGallery = useCallback(() => {
        setGalleryOpen(false);
    }, []);

    return (
        <div id="projects">
            <ImageGallery
                images={galleryImages}
                title={galleryTitle}
                isOpen={galleryOpen}
                onClose={closeGallery}
            />
            <Container maxWidth="xl">
                <SectionWrapper>

                    {/* Section Header */}
                    <Reveal>
                        <SectionHeader>
                            <ProjectHeading className='poppins-semibold'>
                                Selected<br />Work
                            </ProjectHeading>
                            <SubHeading className='poppins-regular'>
                                Products and platforms I've built from the ground up as a full-stack developer.
                            </SubHeading>
                        </SectionHeader>
                    </Reveal>

                    {/* #1 — Featured Hero: SupplyCopia */}
                    <AnimateInView>
                        <HeroProject>
                            <HeroContent>
                                <HeroNumber className='poppins-medium'>PROJECT {featured.number}</HeroNumber>
                                <HeroLabel className='poppins-semibold'>{featured.domain}</HeroLabel>
                                <HeroTitle className='poppins-bold'>{featured.title}</HeroTitle>
                                <HeroDescription className='poppins-regular'>
                                    {featured.description}
                                </HeroDescription>
                                <TechRow>
                                    {featured.tech.map((t, i) => (
                                        <TechPill key={i} className='poppins-medium'>{t}</TechPill>
                                    ))}
                                </TechRow>
                                <HeroRole className='poppins-regular'>
                                    <strong>My Role: </strong>{featured.role}
                                </HeroRole>
                                <HeroLinks>
                                    {featured.liveUrl && (
                                        <HeroLink className='primary poppins-medium' href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <LaunchIcon style={{ fontSize: 16 }} /> Visit Live
                                        </HeroLink>
                                    )}
                                </HeroLinks>
                            </HeroContent>
                            <HeroImageBox>
                                <HeroImgStack style={{ cursor: 'pointer' }} onClick={() => openGallery(featured.title, featured.images)}>
                                    <HeroImg src={featured.images.primary} alt={featured.title} />
                                    <HeroImgSecondary src={featured.images.fifth} alt={`${featured.title} detail`} />
                                    <HeroImgTertiary src={featured.images.tertiary} alt={`${featured.title} overview`} />
                                    <HeroImgFourth src={featured.images.fourth} alt={`${featured.title} contracts`} />
                                    <HeroImgFifth src={featured.images.secondary} alt={`${featured.title} reports`} />
                                </HeroImgStack>
                            </HeroImageBox>
                        </HeroProject>
                    </AnimateInView>

                    {/* #2 & #3 — Showcase Rows */}
                    {showcase.map((project, index) => (
                        <AnimateInView key={project.id} delay={0.1}>
                            <ShowcaseRow reverse={index % 2 !== 0}>
                                {index % 2 === 0 ? (
                                    <>
                                        <ShowcaseImageBox accentColor={project.accent} style={{ cursor: 'pointer' }} onClick={() => openGallery(project.title, project.images)}>
                                            <ShowcaseImgWrapper>
                                                <ShowcaseImg className='showcase-main-img' src={project.images.main} alt={project.title} />
                                                {project.images.floatLeft && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='back-left' src={project.images.floatLeft} alt={`${project.title} screen 2`} />
                                                )}
                                                {project.images.floatRight && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='front' src={project.images.floatRight} alt={`${project.title} screen 3`} />
                                                )}
                                                {project.images.topRight && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='top-right' src={project.images.topRight} alt={`${project.title} screen 4`} />
                                                )}
                                            </ShowcaseImgWrapper>
                                        </ShowcaseImageBox>
                                        <ShowcaseContent>
                                            <ShowcaseNumber className='poppins-bold'>{project.number}</ShowcaseNumber>
                                            <ShowcaseDomain className='poppins-semibold'>{project.domain}</ShowcaseDomain>
                                            <ShowcaseTitle className='poppins-semibold'>{project.title}</ShowcaseTitle>
                                            <ShowcaseDescription className='poppins-regular'>{project.description}</ShowcaseDescription>
                                            <ShowcaseTechRow>
                                                {project.tech.map((t, i) => (
                                                    <ShowcaseTechTag key={i} className='poppins-medium'>{t}</ShowcaseTechTag>
                                                ))}
                                            </ShowcaseTechRow>
                                            <ShowcaseRole className='poppins-regular'>
                                                <strong>My Role: </strong>{project.role}
                                            </ShowcaseRole>
                                            {project.liveUrl && (
                                                <ShowcaseLink className='poppins-semibold' href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    Visit Live <ArrowOutwardIcon style={{ fontSize: 16 }} />
                                                </ShowcaseLink>
                                            )}
                                        </ShowcaseContent>
                                    </>
                                ) : (
                                    <>
                                        <ShowcaseContent reverse>
                                            <ShowcaseNumber className='poppins-bold'>{project.number}</ShowcaseNumber>
                                            <ShowcaseDomain className='poppins-semibold'>{project.domain}</ShowcaseDomain>
                                            <ShowcaseTitle className='poppins-semibold'>{project.title}</ShowcaseTitle>
                                            <ShowcaseDescription className='poppins-regular'>{project.description}</ShowcaseDescription>
                                            <ShowcaseTechRow>
                                                {project.tech.map((t, i) => (
                                                    <ShowcaseTechTag key={i} className='poppins-medium'>{t}</ShowcaseTechTag>
                                                ))}
                                            </ShowcaseTechRow>
                                            <ShowcaseRole className='poppins-regular'>
                                                <strong>My Role: </strong>{project.role}
                                            </ShowcaseRole>
                                            {project.liveUrl && (
                                                <ShowcaseLink className='poppins-semibold' href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    Visit Live <ArrowOutwardIcon style={{ fontSize: 16 }} />
                                                </ShowcaseLink>
                                            )}
                                        </ShowcaseContent>
                                        <ShowcaseImageBox accentColor={project.accent} style={{ cursor: 'pointer' }} onClick={() => openGallery(project.title, project.images)}>
                                            <ShowcaseImgWrapper>
                                                <ShowcaseImg className='showcase-main-img' src={project.images.main} alt={project.title} />
                                                {project.images.floatLeft && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='back-left' src={project.images.floatLeft} alt={`${project.title} screen 2`} />
                                                )}
                                                {project.images.floatRight && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='back-right' src={project.images.floatRight} alt={`${project.title} screen 3`} />
                                                )}
                                                {project.images.topRight && (
                                                    <ShowcaseFloatImg className='showcase-float-img' position='top-right' src={project.images.topRight} alt={`${project.title} screen 4`} />
                                                )}
                                            </ShowcaseImgWrapper>
                                        </ShowcaseImageBox>
                                    </>
                                )}
                            </ShowcaseRow>
                        </AnimateInView>
                    ))}

                    {/* Other smaller projects */}
                    <SmallProjectsSection>
                        <Reveal>
                            <SmallProjectsHeading className='poppins-medium'>
                                Other Notable Work
                            </SmallProjectsHeading>
                        </Reveal>
                        <SmallGrid>
                            {others.map((project, index) => (
                                <AnimateInView key={index} delay={index * 0.1}>
                                    <SmallCard style={{ cursor: 'pointer' }} onClick={() => openGallery(project.title, { main: project.image })}>
                                        <SmallCardImgBox>
                                            <SmallCardImg className='small-card-img' src={project.image} alt={project.title} />
                                        </SmallCardImgBox>
                                        <SmallCardContent>
                                            <SmallCardTitle className='poppins-semibold'>{project.title}</SmallCardTitle>
                                            <SmallCardDesc className='poppins-regular'>{project.description}</SmallCardDesc>
                                        </SmallCardContent>
                                    </SmallCard>
                                </AnimateInView>
                            ))}
                        </SmallGrid>
                    </SmallProjectsSection>

                </SectionWrapper>
            </Container>
        </div>
    );
}


// ═══════════════════════════════════════════
// ANIMATION WRAPPER
// ═══════════════════════════════════════════

function AnimateInView({ children, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
}


export default ProjectsTwo;
