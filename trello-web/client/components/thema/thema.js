import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blueGrey from '@material-ui/core/colors/blueGrey';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: lightBlue,
        secondary: blueGrey
    },
});