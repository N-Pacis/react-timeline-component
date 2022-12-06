export interface TimelineDataItem{
    text: string
    date: string
    category: TimelineDataItemCategory
    link: TimelineDataItemLink
}

interface TimelineDataItemCategory{
    tag: string
    color: string
}

interface TimelineDataItemLink{
    url: string
    text: string
}

export interface TimelineItemProps{
    data: TimelineDataItem
}

export interface TimelineProps{
    data: TimelineDataItem[]
}