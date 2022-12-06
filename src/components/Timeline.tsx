import { TimelineDataItem, TimelineProps } from '../types/types'
import TimelineItem from './TimelineItem'

function Timeline(props:TimelineProps) {
    return (
        <div className="timeline-container">
            {props.data.map((item:TimelineDataItem, idx:Number) => (
                <TimelineItem data={item} key={idx}/>
            ))}
        </div>
    )
}

export default Timeline
