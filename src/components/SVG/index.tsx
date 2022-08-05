import React, {FC, useRef, useEffect, useMemo, useCallback, useState} from 'react';
import {SVG, Svg} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';

// import { WindowSizesType } from '../../hooks/getWindowSizesHook/types/WindowSizesType';
// TODO: optimize performance and figure how rerender SVG figures
// import { getWindowSizesHook } from '../../hooks/getWindowSizesHook';

import {createBackgroundDots} from './utils/createBackgroundDots';
import {createSvgRect} from './utils/createSvgRect';

import {dotsConfig} from './configs/dotsConfig';

import {SVGStyled} from './styles/SVGStyled';

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rStr = r.toString(16);
    const gStr = g.toString(16);
    const bStr = b.toString(16);
    return `#${rStr}${gStr}${bStr}`;
}

/**
 * Test SVG.js with React.js and Typescript
 */
export const SVGjs: FC<{}> = (): JSX.Element => {
    const SVGWrapperRefElement = useRef<HTMLDivElement | null>(null);

    /** size of steps betwen Y coordiante */
    const [stepY] = useState<number>(16);
    /** size of steps betwen X coordiante */
    const [stepX] = useState<number>(16);

    /** SVG container height */
    const [height] = useState<number>(600);
    /** SVG container width */
    const [width] = useState<number>(800);

    /** IF entitity config */
    const [ifConfig] = useState<any>({
        size: {
            width: stepX * 6 + 4,
            height: stepY * 6 + 4,
        },
        attr: {
            style: 'cursor: pointer;',
        },
        fill: 'blue',
    });

    // /** dynamic window width and height values */
    // const windowSizes: WindowSizesType = getWindowSizesHook(150);
    /** initial SVG container */
    const SVGContainer: Svg = useMemo(() => SVG(), []);

    /** initial rectangle in our SVG container */
    const addBackgroundRect = useCallback((svgContainer: Svg, width: number, height: number) => {
        /** generate rect background */
        const backgroundSvgRect = createSvgRect(width, height, '#fff', 0, 0);
        /** insert rect background in our SVG container */
        svgContainer.add(backgroundSvgRect);
    }, []);

    /** initial dot's in our SVG container */
    const addBackgroundDots = useCallback((svgContainer: Svg, width: number, height: number): void => {
        const {x, y, fill} = dotsConfig;
        /** generate dot's */
        const dotsGroup = createBackgroundDots(width, height, x, y, fill);
        /** insert dot's in our SVG container */
        svgContainer.add(dotsGroup);
    }, []);

    // TODO: need analysis how handle window resize with good performance
    // const updateSvgSizes = useCallback((container: Svg, sizes: WindowSizesType): void => {
    //     const newHeight = sizes.height;
    //     const newWidth = sizes.width;
    //     const heightNeedUpdate = newHeight !== 0 && newHeight !== height;
    //     const widthNeedUpdate = newWidth !== 0 && newWidth !== width;

    //     /** update SVG container height value in state */
    //     if (heightNeedUpdate) {
    //       setHeight(newHeight);
    //     }

    //     /** update SVG container width value in state */
    //     if (widthNeedUpdate) {
    //       setWidth(newWidth);
    //     }

    //     /**
    //      * Update SVG container sizes after window resize event listener trigered
    //      * and rerender our dot's background
    //      */
    //     if (heightNeedUpdate || widthNeedUpdate) {
    //       container.height(newHeight).width(newWidth);
    //       addDots(container, newWidth, newHeight);
    //     }
    // }, [width, height, addDots]);

    const dragableHandler = useCallback(
        (e: any): void => {
            e.preventDefault();

            const {handler, box} = e.detail;
            const moveX = box.x - (box.x % stepX);
            const moveY = box.y - (box.y % stepY);

            // console.info({
            //   eventName: 'dragableHandler',
            //   handler,
            //   moveX,
            //   moveY,
            // });

            handler.move(moveX, moveY);
        },
        [stepX, stepY]
    );

    useEffect(() => {
        /** check is SVG wrapper DOM Element rendered */
        if (SVGWrapperRefElement && SVGWrapperRefElement?.current) {
            const SVGDOMElement: HTMLDivElement = SVGWrapperRefElement?.current;
            const SVGChildrenDOMElements: HTMLCollection | undefined = SVGWrapperRefElement?.current?.children;

            /** check is SVG wrapper DOM Element don't have children DOM Elements */
            if (SVGDOMElement && SVGChildrenDOMElements && SVGChildrenDOMElements.length < 1) {
                /** set sizes to our SVG container */
                SVGContainer.size('100%', '100%');
                // SVGContainer.size(width, height);
                /** add our SVG container into wrapper DOM Element */
                SVGContainer.addTo(SVGDOMElement);
                /** create rectangle and insert it into our SVG container */
                addBackgroundRect(SVGContainer, width, height);
                /** create dot's and insert theme into our SVG container */
                addBackgroundDots(SVGContainer, width, height);

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 2 - 2, stepY * 6 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                        .on('click', function (this: Svg) {
                            console.log(1, this);
                            this.fill({
                                color: randomColor(),
                            });
                        })
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 12 - 2, stepY * 6 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                        .click(function (this: Svg) {
                            console.log(1, this);
                            this.fill({
                                color: randomColor(),
                            });
                        })
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 22 - 2, stepY * 6 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 32 - 2, stepY * 6 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 2 - 2, stepY * 16 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 12 - 2, stepY * 16 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                );

                //
                SVGContainer.add(
                    SVG()
                        .rect()
                        .attr(ifConfig.attr)
                        .fill(ifConfig.fill)
                        .size(ifConfig.size.width, ifConfig.size.height)
                        .move(stepX * 22 - 2, stepY * 16 - 2)
                        .draggable()
                        .on('dragmove.namespace', dragableHandler)
                );
            }
        }
        // eslint-disable-next-line
    }, [
        SVGWrapperRefElement,
        width,
        height,
        stepX,
        stepY,
        addBackgroundRect,
        addBackgroundDots,
        // windowSizes,
        dragableHandler,
    ]);

    // TODO: need analysis how handle window resize with good performance
    // if (SVGContainer && windowSizes) {
    //   updateSvgSizes(SVGContainer, windowSizes);
    // }

    return (
        <SVGStyled
            data-name='SVGContainer'
            ref={SVGWrapperRefElement}
        />
    );
};
