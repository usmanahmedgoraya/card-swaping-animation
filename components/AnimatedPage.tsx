'use client'

import { useState, useEffect, useRef } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'

const tooltipContent = [
    { title: "Enable Team-Based Care", description: "Ditch data silos and faxes. Collaborate easily with all providers in the patient’s circle of care!" },
    { title: "1-Click for All Admin Work", description: "Create prescriptions, OHIP claims, and update patient charts with a single click using patent pending 1-CLICK CYNC technology." },
    { title: "Learn in 5 Minutes", description: "Get started quickly with no learning curve, and use built-in tutorials to fill any gaps." },
    { title: "Patients Share the Burden", description: "By sharing notes, managing referrals, and taking an active role, patients reduce paperwork and staff tasks for physicians." },
]

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

// Circle Path
const AnimatedSVG2 = ({ animationKey, children }: { animationKey: number; children: React.ReactNode }) => (
    <svg width="289" height="117" viewBox="0 0 289 117" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-56 right-24 md:scale-x-150 md:scale-y-150 scale-110">
        <m.path
            d="M1.89782 61.5756C0.334197 127.285 291.874 138.601 286.825 58.7625C281.311 -28.4086 3.46144 -4.13372 1.89782 61.5756Z"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            fill="#fff0"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={`path-${animationKey}`}
        />
        <foreignObject width="289" height="117" style={{ overflow: "hidden" }}>
            <div className="h-full flex items-center justify-center px-2 pl-10 py-1 text-black" style={{ overflow: "hidden" }}>
                {children}
            </div>
        </foreignObject>
    </svg>
)



// Arrow paths
const AnimatedSVG = ({ animationKey }: { animationKey: number }) => (
    <svg width="251" height="274" viewBox="0 0 251 274" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 -right-[5.5rem]'>
        <m.path
            d="M131 228C215.059 163 253.5 92.7708 213.025 58.9831C206.582 53.6038 197.151 47.914 188.417 50.628C177.169 54.2881 173.367 75.7478 185.249 81.0888C191.715 83.9347 198 78.0681 197.942 71.6625C199.323 36.4446 137.997 13.0649 110.971 16.2509"
            stroke="#000000"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={`path1-${animationKey}`}
        />
        <m.path
            d="M116.403 211.295C117.361 219.604 107.742 251.742 108.964 259.778C112.41 257.297 116.135 255.349 119.855 253.132C124.106 250.637 128.641 248.943 133.181 247.517"
            stroke="#000000"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            key={`path2-${animationKey}`}
        />
    </svg>
)

const AnimatedSVG3 = ({ animationKey }: { animationKey: number }) => (
    <svg width="134" height="138" viewBox="0 0 134 138" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative -top-[20.4rem] right-28'>
        <m.path
            d="M44.948 22.1401C55.6175 28.1114 103.315 71.2683 108.177 121.654"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={`path1-${animationKey}`}
        />
        <m.path
            d="M40.2521 36.1065C39.0638 30.8632 26.6016 13.6019 25.6267 8.46435C28.185 9.18372 30.7952 9.51815 33.4592 10.0161C36.4961 10.5618 39.5313 10.5591 42.5127 10.3928"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            key={`path2-${animationKey}`}
        />
    </svg>
)

const AnimatedSVG4 = ({ animationKey }: { animationKey: number }) => (
    <svg width="210" height="218" viewBox="0 0 210 218" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative -top-[2.1rem] left-0 '>
        <m.path
            d="M91.5218 185.241C103.651 174.6 176.5 100 103.5 15.5003"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={`path1-${animationKey}`}
        />
        <m.path
            d="M81.7319 169.126C81.6092 176.049 70.2014 201.37 70.3249 208.098C73.4242 206.439 76.6938 205.248 79.9886 203.835C83.7506 202.253 87.6574 201.358 91.5389 200.684"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            key={`path2-${animationKey}`}
        />
    </svg>
)

const AnimatedSVG5 = ({ animationKey }: { animationKey: number }) => (
    <svg width="186" height="189" viewBox="0 0 186 189" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative -top-[8rem] left-[6.3rem]'>
        <m.path
            d="M134.27 129.738C150.447 94.5433 111.658 41.1535 75.9099 66.1368C70.9295 69.7173 72.4325 80.9186 79.1441 81.6854C82.787 82.0727 84.968 78.184 83.9299 75.0284C83.4148 73.1635 82.084 71.6592 80.5475 70.3884C67.6607 59.2013 48.2735 54.0736 32.2308 61.3547"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={`path1-${animationKey}`}
        />
        <m.path
            d="M127 110C127.958 118.309 122.744 138.742 123.965 146.778C127.412 144.297 131.136 142.349 134.856 140.132C139.108 137.637 143.643 135.942 148.183 134.516"
            stroke="black"
            strokeWidth="2.7411"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            key={`path2-${animationKey}`}
        />
    </svg>
)

const SVGsData = [
    {
        id: 1, svg: AnimatedSVG, position: {
            bottom: "bottom-60",
            right: "md:right-24 -right-12"
        }
    },
    {
        id: 2, svg: AnimatedSVG3, position: {
            bottom: "-bottom-[28rem]",
            right: "-right-[5rem]"
        }
    },
    {
        id: 3, svg: AnimatedSVG4, position: {
            bottom: "bottom-[18rem]",
            right: "right-[1rem]"
        }
    },
    {
        id: 4, svg: AnimatedSVG5, position: {
            bottom: "bottom-60",
            right: "md:right-16 -right-8"
        }
    },
    {
        id: 5, svg: AnimatedSVG, position: {
            bottom: "bottom-60",
            right: "right-24"
        }
    },
]

export default function AnimatedPage() {
    const [cards] = useState(colors.map((color, index) => ({
        color,
        zIndex: colors.length - 1 - index,
        svg: SVGsData[index].svg,
    })))
    const [currentStep, setCurrentStep] = useState(0)
    const [animationKey, setAnimationKey] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const svgRefs = useRef<(HTMLDivElement | null)[]>([])


    // Debounce Scroll Event
    const debounce = <T extends (event: WheelEvent) => void>(func: T, delay: number): (event: WheelEvent) => void => {
        let timer: ReturnType<typeof setTimeout>;
        return function (event: WheelEvent) {
            clearTimeout(timer);
            timer = setTimeout(() => func(event), delay);
        };
    };
    
    

    const handleScroll = (e: WheelEvent) => {
        e.preventDefault()
        if (isScrolling) return

        setIsScrolling(true)
        if (e.deltaY > 0 && currentStep < tooltipContent.length - 1) {
            setCurrentStep(prev => prev + 1)
        } else if (e.deltaY < 0 && currentStep > 0) {
            setCurrentStep(prev => prev - 1)
        }
        setAnimationKey(prev => prev + 1)

        setTimeout(() => {
            setIsScrolling(false)
        }, 1000)
    }

    useEffect(() => {
        const debouncedScroll = debounce(handleScroll, 200);
        window.addEventListener('wheel', debouncedScroll, { passive: false });
        return () => window.removeEventListener('wheel', debouncedScroll);
    }, [currentStep, isScrolling]);

    useEffect(() => {
        const currentSvgRef = svgRefs.current[currentStep];
        if (currentSvgRef) {
            const rect = currentSvgRef.getBoundingClientRect();
            const isPartiallyVisible =
                rect.top < window.innerHeight - 600 && rect.bottom >= 0;
            console.log(rect.top, "top", window.innerHeight - 600, "inner hight", rect.bottom, "bottom");

            if (!isPartiallyVisible) {
                scroll.scrollTo(window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2 - 50, {
                    duration: 800,
                    smooth: 'easeInOutQuart',
                });
            }
        }
    }, [currentStep]);


    return (
        <LazyMotion features={domAnimation}>

            <div className='min-h-screen w-full bg-teal-300'>
                <h1 className='text-5xl text-center py-4'>Lorem Heading</h1>
                <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque obcaecati accusamus odio ad vel illum explicabo? Aut esse nesciunt odit numquam at illum provident ab natus, incidunt consequatur harum, libero molestias eligendi cum quae maiores deserunt nisi quas aliquam magni vel voluptatibus facilis! Voluptatibus dolore a, modi nobis aperiam beatae voluptatem illum illo sapiente tempora earum necessitatibus ad quo deserunt quam nesciunt aliquid. Nisi quidem, magnam praesentium aut aperiam reprehenderit quasi voluptatum blanditiis, voluptatibus aliquam magni voluptatem officia quo eveniet perferendis officiis, quod distinctio. Exercitationem dolorum voluptatibus repellendus. Natus, iste praesentium fugiat illum aspernatur doloremque quas dolor quisquam, ipsa reiciendis ipsam labore. Delectus ea debitis, laborum quisquam repellat inventore ullam explicabo ut quis vero culpa atque animi id eos aliquid optio quidem! Sequi, ab vitae optio ipsum voluptate animi quae sit nisi earum dicta, ducimus, molestiae incidunt? Facere quasi vero eaque sint, animi laudantium, praesentium aspernatur dolorum nulla quas quisquam ullam! Quam dicta vero, totam, laboriosam rerum illo sequi nemo, ex officia nostrum at accusantium! Eius minima, assumenda dolore provident quo nobis ratione corrupti! Fugit hic quibusdam fuga illo temporibus quae cum voluptates, vero nemo magni saepe officiis eius praesentium distinctio fugiat necessitatibus, sint vitae consequatur obcaecati quos itaque rem provident, vel quis. Ad voluptates, ex, fuga facilis excepturi id vitae adipisci consequuntur, temporibus magni error beatae sunt culpa minima soluta corrupti suscipit consectetur! Repudiandae, non ratione consequatur praesentium doloribus cum voluptas id magnam. Suscipit dignissimos nesciunt optio. Voluptates est facere repudiandae ad provident. Eveniet dolore odio, tenetur eaque nisi ab quia velit, natus nam laudantium harum ipsa sunt error molestiae! Recusandae ipsum magni veniam tempora labore eaque quidem expedita! Quod eligendi minima fugiat deleniti at dicta cumque explicabo libero ratione ad et, repellat itaque tempora sunt ipsum repellendus nulla illo debitis culpa maxime? Minima modi reiciendis corrupti soluta ut amet expedita at adipisci ad assumenda rerum officiis tempore commodi dicta quo ipsa voluptas mollitia, pariatur odit hic provident? Deserunt quasi, quod voluptates aspernatur, dignissimos dolorem quam tenetur optio voluptatem officia, at veritatis? Ut ducimus, consequatur consequuntur est repellendus ex, amet impedit minima eligendi deleniti delectus debitis culpa quidem autem rem, numquam vero velit ratione omnis provident ipsa! Esse architecto inventore, nam, aspernatur dolorum officia, dolor quis magni nesciunt at ex optio possimus animi labore harum aperiam debitis ducimus asperiores. Error commodi quod voluptatem inventore dolore, excepturi molestias rem numquam veritatis aliquid, ipsa, sint molestiae quos nemo. Iure, expedita saepe recusandae corrupti ad sunt nam explicabo accusamus culpa ea atque quas numquam maxime magni enim rerum sint debitis, nostrum voluptatem. Neque sit molestias harum, magni sunt laudantium repellat! Repellat sed quos nemo qui veniam ad dolor assumenda non, id porro rem a incidunt neque, itaque odio, iste voluptatibus vel molestias at soluta illum provident adipisci et obcaecati. Nostrum iusto eum distinctio nam ipsam esse iure asperiores vel debitis minus deleniti facilis, quae natus recusandae error repellat praesentium eveniet dignissimos corporis facere cum! Ipsa, harum illum. Error sunt, ratione ab molestiae voluptatum vero explicabo autem soluta maxime unde alias exercitationem?
                </p>
            </div>
            <div className='flex justify-center items-center relative w-full min-h-screen h-[150vh] mt-52'>
                <div>
                    <img src="/background@2x.png" alt="to-background" className='absolute -top-[13rem] left-1 hidden md:block' />
                </div>
                <div>
                    <img src="/Mask.png" alt="to-background" className='absolute md:-top-[16rem] md:-left-[8rem] md:rotate-[4deg] -rotate-[18deg] -top-[3rem] left-0 scale-[5] md:scale-110' />
                </div>
                {cards.map((card, index) => {
                    const isVisible = currentStep === index
                    return (
                        <m.div
                            key={card.color}
                            className={`absolute w-[80%] h-96 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl mx-8 font-bold my-12 ${isVisible ? "!z-[99999]" : "z-0"}`}
                            style={{ backgroundColor: card.color }}
                            initial={false}
                            animate={{
                                zIndex: isVisible ? cards.length : card.zIndex,
                                scale: 1,
                                y: card.zIndex * -10,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >

                            Card {index + 1}
                            {isVisible && (
                                <div
                                    ref={el => { svgRefs.current[index] = el }}
                                    className={`absolute ${SVGsData[index]?.position?.bottom} ${SVGsData[index]?.position?.right}`}
                                >
                                    <AnimatedSVG2 animationKey={animationKey}>
                                        <div className="">
                                            <h4 className="font-bold text-xl title leading-[12px] mb-2">{tooltipContent[currentStep]?.title}</h4>
                                            <p className='font-light text-xs leading-[12px] description'>{tooltipContent[currentStep]?.description}</p>
                                        </div>
                                    </AnimatedSVG2>
                                    {card.svg({ animationKey })}
                                </div>
                            )}
                        </m.div>
                    )
                })}
            </div>
            <div className='min-h-screen w-full bg-teal-300'>
                <h1 className='text-5xl text-center py-4'>Lorem Heading</h1>
                <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque obcaecati accusamus odio ad vel illum explicabo? Aut esse nesciunt odit numquam at illum provident ab natus, incidunt consequatur harum, libero molestias eligendi cum quae maiores deserunt nisi quas aliquam magni vel voluptatibus facilis! Voluptatibus dolore a, modi nobis aperiam beatae voluptatem illum illo sapiente tempora earum necessitatibus ad quo deserunt quam nesciunt aliquid. Nisi quidem, magnam praesentium aut aperiam reprehenderit quasi voluptatum blanditiis, voluptatibus aliquam magni voluptatem officia quo eveniet perferendis officiis, quod distinctio. Exercitationem dolorum voluptatibus repellendus. Natus, iste praesentium fugiat illum aspernatur doloremque quas dolor quisquam, ipsa reiciendis ipsam labore. Delectus ea debitis, laborum quisquam repellat inventore ullam explicabo ut quis vero culpa atque animi id eos aliquid optio quidem! Sequi, ab vitae optio ipsum voluptate animi quae sit nisi earum dicta, ducimus, molestiae incidunt? Facere quasi vero eaque sint, animi laudantium, praesentium aspernatur dolorum nulla quas quisquam ullam! Quam dicta vero, totam, laboriosam rerum illo sequi nemo, ex officia nostrum at accusantium! Eius minima, assumenda dolore provident quo nobis ratione corrupti! Fugit hic quibusdam fuga illo temporibus quae cum voluptates, vero nemo magni saepe officiis eius praesentium distinctio fugiat necessitatibus, sint vitae consequatur obcaecati quos itaque rem provident, vel quis. Ad voluptates, ex, fuga facilis excepturi id vitae adipisci consequuntur, temporibus magni error beatae sunt culpa minima soluta corrupti suscipit consectetur! Repudiandae, non ratione consequatur praesentium doloribus cum voluptas id magnam. Suscipit dignissimos nesciunt optio. Voluptates est facere repudiandae ad provident. Eveniet dolore odio, tenetur eaque nisi ab quia velit, natus nam laudantium harum ipsa sunt error molestiae! Recusandae ipsum magni veniam tempora labore eaque quidem expedita! Quod eligendi minima fugiat deleniti at dicta cumque explicabo libero ratione ad et, repellat itaque tempora sunt ipsum repellendus nulla illo debitis culpa maxime? Minima modi reiciendis corrupti soluta ut amet expedita at adipisci ad assumenda rerum officiis tempore commodi dicta quo ipsa voluptas mollitia, pariatur odit hic provident? Deserunt quasi, quod voluptates aspernatur, dignissimos dolorem quam tenetur optio voluptatem officia, at veritatis? Ut ducimus, consequatur consequuntur est repellendus ex, amet impedit minima eligendi deleniti delectus debitis culpa quidem autem rem, numquam vero velit ratione omnis provident ipsa! Esse architecto inventore, nam, aspernatur dolorum officia, dolor quis magni nesciunt at ex optio possimus animi labore harum aperiam debitis ducimus asperiores. Error commodi quod voluptatem inventore dolore, excepturi molestias rem numquam veritatis aliquid, ipsa, sint molestiae quos nemo. Iure, expedita saepe recusandae corrupti ad sunt nam explicabo accusamus culpa ea atque quas numquam maxime magni enim rerum sint debitis, nostrum voluptatem. Neque sit molestias harum, magni sunt laudantium repellat! Repellat sed quos nemo qui veniam ad dolor assumenda non, id porro rem a incidunt neque, itaque odio, iste voluptatibus vel molestias at soluta illum provident adipisci et obcaecati. Nostrum iusto eum distinctio nam ipsam esse iure asperiores vel debitis minus deleniti facilis, quae natus recusandae error repellat praesentium eveniet dignissimos corporis facere cum! Ipsa, harum illum. Error sunt, ratione ab molestiae voluptatum vero explicabo autem soluta maxime unde alias exercitationem?
                </p>
            </div>
        </LazyMotion>
    )
}