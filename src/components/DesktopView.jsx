'use client';
import { Tab } from '@headlessui/react';
import {useDebouncedCallback, userDebouncedCallback} from 'use-debounce';
import { AnimatePresence, motion } from 'framer-motion';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import { features } from './FrameView';
import CircleBackground from './CircleBackground';
import PhoneFrame from './PhoneFrame';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Button from "./Button";

const usePrevious = (value) => {
    let ref = useRef()
    useEffect(() => {
        ref.current = value
    }, [value])
}

const DesktopView = () => {
    let [changeCount, setChangeCount] = useState(0);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let prevIndex = usePrevious(selectedIndex);
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;
    const [page, setPage] = useState(0);

  const half = Math.ceil(features.length / 2);
  const displayedFeatures = page === 0 ? features.slice(0, half) : features.slice(half);
    
    let onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex);
            setChangeCount((changeCount) => changeCount+1);
        }, 100, {loading: true}
    );

  return (
    <Tab.Group as="div" className='grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6' selectedIndex={selectedIndex} onChange={onChange} vertical>
        <Tab.List className='relative z-10 order-last col-span-6 space-y-6'>
          <button 
              onClick={() => {setPage(0); setSelectedIndex(0);}} 
              className={`absolute top-1/2 left-[-4rem] transform -translate-y-1/2 p-2 rounded-full transition-all ${
                  page === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === 0}
          >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          {displayedFeatures.map((feature, featureIndex) => {
              if(page === 1) {featureIndex = featureIndex + 3;}
              return (<><div key={feature.name} className='relative rounded-2xl transition-colors hover:bg-gray-800/30'>
                  {page === 0 ? featureIndex === selectedIndex && (
                      <motion.div layoutId='activeBackground' className='absolute inset-0 bg-gray-800' initial={{ borderRadius: 16 }} />
                  ) : featureIndex === selectedIndex+3 && (
                    <motion.div layoutId='activeBackground' className='absolute inset-0 bg-gray-800' initial={{ borderRadius: 16 }} />
                )}
                  <div className='relative z-10 p-8'>
                      <feature.icon className='h-8 w-8' />
                      <h3 className='mt-6 text-lg font-semibold text-white'>
                          <Tab className='text-left [&:not(:focus-visible)]:focus:outline-none outline-none'>
                              <span className='absolute inset-0 rounded-2xl' />
                              {feature.name}
                          </Tab>
                      </h3>
                      <p className='mt-2 text-sm text-gray-400'>
                          {feature.description}
                      </p>
                      
                      <div className='flex justify-center flex-col'>
                        { feature.links.length > 0 ?
                          <Button href={feature.links[0]} className="z-50 mt-6 rounded-lg px-3 py-2 text-center text-sm font-semibold text-gray-700 bg-gray-900 hover:bg-gray-950">
                            Go to the GitHub repository!
                          </Button> : <></>
                        }
                        { feature.links.length > 1 ?
                          <Button href={feature.links[1]} className="z-50 mt-6 rounded-lg px-3 py-2 text-center text-sm font-semibold text-gray-700 bg-gray-900 hover:bg-gray-950">
                            Go to the website!
                          </Button> : <></>
                        }
                      </div>
                  </div>
              </div>
              
              </>);
            })}

          <button 
              onClick={() => {setPage(1); setSelectedIndex(0);}} 
              className={`absolute top-1/2 right-[-4rem] transform -translate-y-1/2 p-2 rounded-full transition-all ${
                  page === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === 1}
          >
              <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </Tab.List>
        <div className='relative col-span-6'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-0'>
                <CircleBackground color='gold' className='animate-spin-slower' />
            </div>
            <div className='z-10 mx-auto w-full max-w-[366px]'>
              <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
                <Tab.Panels as={Fragment}>
                  <AnimatePresence
                    initial={false}
                    custom={{ isForwards, changeCount }}
                  >
                    {
                        features.map((feature, featureIndex) => 
                            page === 0 ? selectedIndex === featureIndex ? (
                                <Tab.Panel static key={feature.name + changeCount} className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none">
                                    <feature.screen animated custom={{ isForwards, changeCount }} />
                                </Tab.Panel>
                            ) : null
                            : selectedIndex +3 === featureIndex ? (
                              <Tab.Panel static key={feature.name + changeCount} className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none">
                                  <feature.screen animated custom={{ isForwards, changeCount }} />
                              </Tab.Panel>
                          ) : null
                        )
                    }
                  </AnimatePresence>
                </Tab.Panels>
              </PhoneFrame>
            </div>
        </div>
    </Tab.Group>
  )
}

export const MobileView = () => {
    let [activeIndex, setActiveIndex] = useState(0);
    let slideContainerRef = useRef();
    let slideRefs = useRef([]);
    useEffect(() => {
        let observer = new window.IntersectionObserver(
          (entries) => {
            for (let entry of entries) {
              if (entry.isIntersecting) {
                setActiveIndex(slideRefs.current.indexOf(entry.target));
                break;
              }
            }
          },
          {
            root: slideContainerRef.current,
            threshold: 0.6,
          }
        );
    
        for (let slide of slideRefs.current) {
          if (slide) {
            observer.observe(slide);
          }
        }
    
        return () => {
          observer.disconnect();
        };
    }, [slideContainerRef, slideRefs]);

    return (
        <div className="h-auto">
          <div
            ref={slideContainerRef}
            className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                ref={(ref) => (slideRefs.current[featureIndex] = ref)}
                className="w-full flex-none snap-center px-4 sm:px-6"
              >
                <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CircleBackground
                      color="gold"
                      className="animate-spin-slower"
                    />
                  </div>
                  <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                    <feature.screen />
                  </PhoneFrame>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                    <feature.icon className="h-8 w-8" />
                    <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            {features.map((_, featureIndex) => (
              <button
                type="button"
                key={featureIndex}
                className={clsx(
                  "relative h-1 w-6 rounded-full",
                  featureIndex === activeIndex ? "bg-gray-300" : "bg-gray-500"
                )}
                aria-label={`Go to slide ${featureIndex + 1}`}
                onClick={() => {
                  slideRefs.current[featureIndex].scrollIntoView({
                    block: "nearest",
                    inline: "nearest",
                  });
                }}
              >
                <span className="absolute -inset-x-1.5 -inset-y-3" />
              </button>
            ))}
          </div>
        </div>
      );
}

export default DesktopView