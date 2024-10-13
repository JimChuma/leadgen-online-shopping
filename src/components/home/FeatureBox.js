export default function FeatureBox({icon, smallText, bigText}) {
    return <div>
        <div>
            <span className={icon}></span>
        </div>
        <div>
            <span>{smallText}</span>
            <h3>{bigText}</h3>
        </div>
    </div>
}