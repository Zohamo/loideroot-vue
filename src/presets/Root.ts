import { definePreset } from '@primeuix/themes'
import Nora from '@primeuix/themes/nora'

export default definePreset(Nora, {
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
    accordion: {
      header: {
        background: '{surface.950}',
        color: '{surface.0}',
        activeBackground: '{surface.950}',
        activeColor: '{surface.0}',
        hoverBackground: '{surface.950}',
        hoverColor: '{surface.0}',
        activeHoverBackground: '{surface.950}',
        activeHoverColor: '{surface.0}',
        borderColor: '{surface.950}',
        borderWidth: '3px',
        toggleIcon: {
          color: '{surface.0}',
          activeColor: '{surface.0}',
          hoverColor: '{surface.0}',
          activeHoverColor: '{surface.0}',
        },
      },
      content: {
        background: 'transparent',
        borderColor: '{surface.950}',
        borderWidth: '3px',
      },
    },
    checkbox: {
      root: {
        background: '{amber.600}',
        borderColor: '{amber.600}',
      },
    },
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
          root: {
            background: '{amber.50}',
          },
        },
      },
    },
    drawer: {
      colorScheme: {
        light: {
          root: {
            background: '{amber.50}',
          },
        },
      },
    },
    menu: {
      colorScheme: {
        light: {
          root: {
            background: 'none',
            borderColor: 'none',
          },
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
