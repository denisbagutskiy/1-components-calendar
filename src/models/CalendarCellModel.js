export class CalendarCellModel{
    constructor(entity){
        Object.assign(
            this,
            {
                day: {},
                today: {}
            },
            entity
        )
    }
}