import { Icon } from '@chakra-ui/core';

export function ToggleMode(colorMode) {
    console.log(colorMode);
    if (colorMode === "light") {
        return <Icon name="moon" />
    }
    return <Icon name="sun" />
}