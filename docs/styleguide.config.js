const path = require('path')
const webpackMerge = require('webpack-merge')

module.exports = {
  title: 'Cozy UI React components',
  pagePerSection: true,
  sections: [
    {
      name: 'Bar',
      components: () => [
        '../react/BarButton/index.jsx',
        '../react/BarTitle/index.jsx'
      ]
    },
    {
      name: 'Basics',
      components: () => [
        '../react/Badge/index.jsx',
        '../react/Banner/index.jsx',
        '../react/InfosBadge/index.jsx',
        '../react/GhostFileBadge/index.jsx',
        '../react/Button/index.jsx',
        '../react/MuiCozyTheme/Buttons',
        '../react/ButtonAction/index.jsx',
        '../react/Card/index.jsx',
        '../react/Chip/index.jsx',
        '../react/Counter/index.jsx',
        '../react/DropdownButton/index.jsx',
        '../react/Icon/index.jsx',
        '../react/IconButton/index.jsx',
        '../react/IconStack/index.jsx',
        '../react/Paper/index.js',
        '../react/PercentageBar/index.jsx',
        '../react/Progress',
        '../react/ProgressionBanner',
        '../react/Spinner/index.jsx',
        '../react/Stack/index.jsx'
      ]
    },
    {
      name: 'Forms',
      components: () => [
        '../react/Checkbox/index.jsx',
        '../react/DateMonthPicker/index.jsx',
        '../react/Field/index.jsx',
        '../react/MuiCozyTheme/TextField',
        '../react/Labs/CollectionField',
        '../react/FileInput/index.jsx',
        '../react/Input/index.jsx',
        '../react/InputGroup/index.jsx',
        '../react/Label/index.jsx',
        '../react/NestedSelect/NestedSelect.jsx',
        '../react/Radio/index.jsx',
        '../react/SelectBox/SelectBox.jsx',
        '../react/Stepper/index.jsx',
        '../react/Textarea/index.jsx',
        '../react/MuiCozyTheme/Switch'
      ]
    },
    {
      name: 'Layout components',
      components: () => [
        '../react/Circle/index.jsx',
        '../react/MuiCozyTheme/Divider/index.jsx',
        '../react/MuiCozyTheme/ExpansionPanel',
        '../react/Hero/index.jsx',
        '../react/hooks/useBreakpoints/index.jsx',
        '../react/Layout/Layout.jsx',
        '../react/NarrowContent/index.jsx',
        '../react/Page/index.jsx',
        '../react/SectionHeader/index.jsx',
        '../react/SelectionBar/index.jsx',
        '../react/Sidebar/index.jsx',
        '../react/ViewStack/index.jsx'
      ]
    },
    {
      name: 'Content',
      components: () => [
        '../react/Accordion/index.jsx',
        '../react/AppTitle/index.jsx',
        '../react/Avatar/index.jsx',
        '../react/BottomDrawer/index.jsx',
        '../react/Empty/index.jsx',
        '../react/Figure/Figure.jsx',
        '../react/Figure/FigureBlock.jsx',
        '../react/Filename/index.jsx',
        '../react/MuiCozyTheme/Grid',
        '../react/Infos/index.jsx',
        '../react/InfosCarrousel/index.jsx',
        '../react/LoadMore/index.jsx',
        '../react/Media/Media.jsx',
        '../react/MidEllipsis/index.jsx',
        '../react/CozyDialogs',
        '../react/Dialog',
        '../react/Table/index.jsx',
        '../react/Typography/index.jsx',
        '../react/Tooltip/index.jsx',
        '../react/UnorderedList/index.jsx',
        '../react/Wizard/index.jsx'
      ]
    },
    {
      name: 'Intents',
      components: () => [
        '../react/IntentIframe/IntentIframe.jsx',
        '../react/IntentDialogOpener/IntentDialogOpener.jsx'
      ]
    },
    {
      name: 'List',
      components: () => [
        '../react/MuiCozyTheme/List',
        '../react/ListItemText/index.jsx',
        '../react/OrderedList/index.jsx'
      ]
    },
    {
      name: 'Navigation',
      components: () => [
        '../react/ActionMenu/index.jsx',
        '../react/MuiCozyTheme/Menus',
        '../react/AppLinker/index.jsx',
        '../react/Breadcrumbs/index.jsx',
        '../react/Tabs/index.jsx',
        '../react/NavigationList/index.jsx'
      ]
    },
    {
      name: 'Special',
      components: () => [
        '../react/Alerter/index.jsx',
        '../react/AppIcon/index.jsx',
        '../react/AppTile/index.jsx',
        '../react/AppSections/index.jsx',
        '../react/CipherIcon/index.jsx',
        '../react/CozyTheme/index.jsx',
        '../react/Overlay/index.jsx',
        '../react/PasswordExample/index.jsx',
        '../react/Popup/index.jsx',
        '../react/PopupOpener/index.jsx',
        '../react/PushClientButton/index.jsx',
        '../react/QuotaAlert/index.jsx',
        '../react/Viewer/index.jsx'
      ]
    },
    {
      name: 'Labs',
      components: () => [
        '../react/Labs/GridItem',
        '../react/Labs/IconGrid',
        '../react/Labs/PasswordInput'
      ]
    },
    {
      name: 'Files',
      components: () => ['../react/HistoryRow', '../react/UploadQueue']
    },
    {
      name: 'Contacts',
      components: () => [
        '../react/ContactsList',
        '../react/ContactsListModal',
        '../react/ContactPicker'
      ]
    },
    {
      name: 'Deprecated',
      components: () => [
        '../react/Menu/index.jsx',
        '../react/Modal/index.jsx',
        '../react/Text/index.jsx',
        '../react/MuiCozyTheme/RaisedList',
        '../react/CompositeRow/index.jsx',
        '../react/InlineCard/index.jsx',
        '../react/PercentageLine/index.jsx',
        '../react/IntentModal/IntentModal.jsx',
        '../react/IntentOpener/IntentOpener.jsx'
      ]
    }
  ],
  components: '../react/**/*.jsx',
  template: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato:400,700,300'
        }
      ]
    }
  },
  styleguideComponents: {
    SectionsRenderer: path.join(__dirname, 'components/SectionsRenderer.jsx'),
    TableOfContentsRenderer: path.join(
      __dirname,
      'components/TableOfContentsRenderer.jsx'
    ),
    Wrapper: path.join(__dirname, 'components/Wrapper')
  },
  theme: {
    fontFamily: {
      base: 'Lato, sans-serif'
    }
  },
  webpackConfig: webpackMerge(require('./webpack.config.js'), {
    resolve: {
      alias: {
        'cozy-ui/transpiled/react': path.resolve(__dirname, '../react/'),
        'cozy-ui': path.join(__dirname, '..')
      }
    }
  }),
  serverPort: 6161,
  skipComponentsWithoutExample: true,
  styleguideDir: path.resolve(__dirname, '../build/react'),
  require: [
    path.join(__dirname, './style.styl'),
    path.join(__dirname, './styleguide.setup')
  ],
  exampleMode: 'collapse',
  usageMode: 'collapse',
  context: {
    utils: path.resolve(__dirname, 'utils'),
    isTesting: path.resolve(__dirname, '../react/helpers/isTesting'),
    content: path.resolve(__dirname, 'fixtures/content')
  },
  styles: {
    Playground: {
      preview: {
        padding: 0
      }
    }
  }
}
