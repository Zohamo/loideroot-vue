import { definePreset } from '@primeuix/themes'
import Nora from '@primeuix/themes/nora'

const Root = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
  components: {
    datatable: {
      headerCell: {
        background: 'transparent',
      },
      row: {
        background: 'transparent',
      },
    },
    dialog: {
      colorScheme: {
        light: {
          background: '{amber.50}',
        },
      },
    },
    drawer: {
      colorScheme: {
        light: {
          background: '{amber.50}',
        },
      },
    },
    menu: {
      colorScheme: {
        light: {
          background: 'none',
          borderColor: 'none',
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: 'transparent',
            borderColor: 'none',
          },
          submenu: {
            background: '{amber.50}',
          },
        },
      },
    },
  },
})

export default Root
