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
    <Tab.Group as="div" className='grid grid-cols-12 items-center gap-16 lg:gap-20 xl:gap-24 px-6' selectedIndex={selectedIndex} onChange={onChange} vertical>
      <div className="relative grid grid-cols-12 gap-16 px-6 py-10 lg:gap-20 xl:gap-24">
        <Tab.List className='col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="relative rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all p-6"
            >
              {index === selectedIndex && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-2xl bg-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              <div className="relative z-10">
                <feature.icon className="h-8 w-8 text-white" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </Tab>
                </h3>
                <p className="mt-2 text-sm text-gray-300">{feature.description}</p>

                <div className="mt-4 flex flex-col gap-2">
                  {feature.links[0] && (
                    <Button
                      href={feature.links[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-50 text-sm px-3 py-2 font-semibold bg-gray-900 hover:bg-gray-950"
                    >
                      GitHub
                    </Button>
                  )}
                  {feature.links[1] && (
                    <Button
                      href={feature.links[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-50 text-sm px-3 py-2 font-semibold bg-gray-900 hover:bg-gray-950"
                    >
                      Website
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Tab.List>

        <div className="col-span-4 sticky top-60 h-[500px] flex flex-col items-center">
          <div className="relative w-full max-w-xs mx-auto">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <CircleBackground color="gold" className="animate-spin-slower" />
            </div>
            <PhoneFrame className="w-full">
              <Tab.Panels as={Fragment}>
                <AnimatePresence initial={false} custom={{ isForwards, changeCount }}>
                  {features.map((feature, index) =>
                    index === selectedIndex ? (
                      <Tab.Panel
                        static
                        key={feature.name + changeCount}
                        className="col-start-1 row-start-1 flex focus:outline-none"
                      >
                        <feature.screen animated custom={{ isForwards, changeCount }} />
                      </Tab.Panel>
                    ) : null
                  )}
                </AnimatePresence>
              </Tab.Panels>
            </PhoneFrame>
          </div>
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