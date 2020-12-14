import { SmartConnectButton, Device, DeviceList, CodeEntry } from 'cobrowse-agent-ui';

function App(props) {

    return (
        <div className="App" style={{margin: 15}}>
            <h2>Smart Connect Buttons</h2>
            <p>These buttons change style and become clickable when a device comes online.</p>
            { props.devices.map(d => <SmartConnectButton key={d.id} onClick={props.connect} device={d} />) }

            <h2>Device Listing</h2>
            <p>A list of devices whose details update in real time.</p>
            <DeviceList devices={props.devices} connect={props.connect} />

            <h2>Six Digit Code Entry</h2>
            <p>A component for accepting a screen share code.</p>
            <CodeEntry onCode={props.handleCode} />

            <h2>Customization of Components</h2>
            <p>Pick and choose which components are used.</p>
            { props.devices.map(d => (
                <div key={d.id} style={{border:`2px solid ${d.online?'orange':'#eee'}`, borderRadius:5, marginTop: 7}}>
                    <Device style={{border: '0px none', marginTop: 7}} device={d}>
                        <button>Custom Button</button>
                    </Device>
                    { Object.keys(d.custom_data).map(key => (
                        <div style={{display:'inline-block', margin: 4, padding: '3px 7px', fontSize:12, borderRadius:10, background:'#f3f3f3'}} key={key}>
                            <b>{key}</b><span> = </span><code>{d.custom_data[key]}</code>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
