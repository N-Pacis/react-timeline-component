import {TimelineItemProps } from '../types/types'

function TimelineItem(props:TimelineItemProps) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: props.data.category.color }}>
                    {props.data.category.tag}
                </span>
                <time>{props.data.date}</time>
                <p>{props.data.text}</p>
                {props.data.link && (
                    <a
                        href={props.data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    )
}

export default TimelineItem
