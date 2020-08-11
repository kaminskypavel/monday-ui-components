import {create} from '@storybook/theming';
import {addons} from '@storybook/addons';

addons.setConfig({
    showRoots: true,

    theme: create({
        base: 'light',
        brandTitle: 'monday (DaPulse) react components written in Typescript'
    })
});
