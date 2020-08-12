import {create} from '@storybook/theming';
import {addons} from '@storybook/addons';

addons.setConfig({
    showRoots: true,

    theme: create({
        base: 'light',
        brandUrl: 'https://github.com/kaminskypavel/monday-ui-components',
        brandImage: 'https://i.imgur.com/tWLLHsS.png',
    })
});
