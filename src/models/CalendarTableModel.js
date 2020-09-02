export class CalendarTableModel{
    constructor(entity){
        Object.assign(
            this,
            {
                rows: []
            },
            entity
        )
    }
}