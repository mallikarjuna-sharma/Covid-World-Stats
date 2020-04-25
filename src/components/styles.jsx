

const Styles = theme => ({


    root:{
        backgroundColor:"#121212"
    },
    
    paperRoot: {
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
            padingBottom:"10%"
        },
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    }


})

export default Styles;