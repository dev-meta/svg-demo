import React, {FC, memo, useContext} from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {ControlsStyled} from './styles/ControlsStyled';
import {MainContext} from '../../contexts/MainContext';

/**
 * Base controls for our SVG container
 */
export const Controls: FC<{}> = memo((): JSX.Element => {
    const mainContext = useContext(MainContext);

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
        </ControlsStyled>
    );
});
