import React, { FC, memo, useContext } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { ControlsStyled } from './styles/ControlsStyled';
import { MainContext } from '../../contexts/MainContext';

import { SVG, Svg } from '@svgdotjs/svg.js';

/**
 * Base controls for our SVG container
 */
export const Controls: FC<{}> = memo((): JSX.Element => {
    const mainContext = useContext(MainContext);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files, this);
        const [source] = Array.prototype.slice.call(e.target.files);
        const container = document.createElement('div');
        // const svg= SVG(source);
        // svg.addTo(container)
        // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const reader = new FileReader();
        reader.onload = function (e) {
            console.log(e?.target?.result)
            const {result} = e.target!;
            SVG(result).addTo(container)
        }
        reader.readAsText(source)
        const root = document.querySelector('#root');
        if(root) {

            root.appendChild(container)
        }
    };
    return (
        <ControlsStyled>
            <ButtonGroup
                variant='contained'
                color='primary'
                aria-label='contained primary button group'
            >
                <Button>add condition</Button>
                <Button>add loop</Button>
                <Button>{mainContext.title}</Button>
            </ButtonGroup>
            <input
                type='file'
                accept='.svg'
                onChange={onChange}
            />
        </ControlsStyled>
    );
});
