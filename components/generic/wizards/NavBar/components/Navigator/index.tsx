import Flex from '@components/generic/layouts/Flex';
import { FC, ReactElement } from 'react';
import Box from '../../../../Box';
import Inner from '../../../../layouts/Inner';
import NavitagationTemplate from '../../../../templates/sections/NavigationTemplate/index';
import { NavItemProps } from '../NavItem';
type Nav = NavItemProps
interface Props {
    leftButtonsSection:ReactElement[];
    rightButtonsSection:ReactElement[];
}
const Navigator:FC<Props> = ({rightButtonsSection,leftButtonsSection}) => {
    return (
        <Box width="100%" height='4rem'>
            <Flex>
            <Inner isMaxWidthView>
                <NavitagationTemplate
                    leftButtons={leftButtonsSection}
                    rightButtons={rightButtonsSection}
                />
            </Inner>
            </Flex>
        </Box>
    )
}
export default Navigator;