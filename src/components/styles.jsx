

const Styles = theme => ({


    root: {
        backgroundColor: "#121212"
    },

    paperRoot: {
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
            padingBottom: "10%"
        },
    },

    formControl: {
        margin: theme.spacing(4),
    },

    formControlGraph: {
        margin: theme.spacing(12),
        width: "60%"
    },
    graphButton: {
        '&:hover': {
            background: "transparent",
        },
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
    },

    foot2: {
        textAlign: 'center',

        height: '60px',
        width: '100%',

    }


})

export default Styles;