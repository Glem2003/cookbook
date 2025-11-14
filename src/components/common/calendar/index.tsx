// style
import './style.sass'

// utils
import getToday from '../../../utils/getToday'

const Calendar = () => {

    const { year, month, day, hour } = getToday()

    const timeBackgorundPercent = (hour / 23) * 100;

    return (
        <div className="calendar">
            <div className="calendar-grid">
                <div className="date-cell">{year} Y</div>
                <div className="date-cell">{month} M</div>
                <div
                    className="date-cell today"
                    style={{
                        background: `linear-gradient(to right, orange 0%, transparent ${timeBackgorundPercent}%)`
                    }}>
                    {day} D
                </div>
            </div>
        </div>
    )
}

export default Calendar