import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import UseInput from "../../lib/useInputState"

const useStyles = makeStyles(theme => ({
    root:{
                      
    },
    formControl:{
        width:"100%"
    }
}))


const SelectComponent = function({heading,category,...props}){
    const [state,setState,handleChange] = UseInput("")

    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <h2>{heading}</h2>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple"><span>{heading}</span></InputLabel>
        <Select
          native
          value={state}
          onChange={setState}
          label="Gift Card"
          inputProps={{
            name: 'card',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {!category ?
          <> 
          <option value={10}>Amazon</option>
          <option value={20}>Xbox</option>
          <option value={30}>Sephora</option>
          <option value={30}>iTunes</option>
          <option value={30}>Google play</option>
          <option value={30}>Walmart</option>
          <option value={30}>NordStrom</option>
          <option value={30}>Ebay</option>
          <option value={30}>American Express</option>
          </>
        :
        <>
        <option value={1}>$50</option>
        <option value={1}>$100</option>
        <option value={1}>$200</option>
        <option value={1}>$300</option>
        <option value={1}>$500</option>
        </>
        }
        </Select>
      </FormControl>
        </Box>
    )
}

export default SelectComponent