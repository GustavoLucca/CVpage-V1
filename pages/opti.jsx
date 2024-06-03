export const LBubble = ({children}) => (
    <p className="w3-light-grey w3-round-xlarge w3-medium">{children}</p>
);

export const Button1 = ({children}) => (
    <button
        type="button" style={{
        backgroundColor: '#009688',
        fontSize: '15px',
        border: 'none',
        color: 'white',
        cursor: 'pointer'
    }}>{children}</button>
);

export const Button2 = ({children}) => (
    <div className="w3-container w3-card w3-white child1">
            <h2 style={{blockSize: '70px', width: '100%', height: '100%',}}
                className="w3-text-grey w3-padding-16"><i
                className="fa fa-database fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{children}</h2>
            <div className="w3-container">
                    <h5 className="w3-opacity"><b>
                    </b></h5>
            </div>
    </div>
);