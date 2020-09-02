export class CalendarRowModel{
    constructor(entity){
        Object.assign(
            this,
            {
                cells: []
            },
            entity
        )
    }
}