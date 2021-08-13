import React from 'react'

export default function OurFirstComponent({message}) {
    const [localState, setLocalState] = React.useState(message)

    console.log(localState, "local state")
    return <div>
        <h1>{localState}</h1>
        <button onClick={() => setLocalState('Please subsribe!')}>Cool</button>
    </div>
}
