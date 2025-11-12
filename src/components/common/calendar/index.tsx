// style
import './style.sass'

// utils
import getToday from '../../../utils/getToday'

const Calender = () => {

    const { year, month, day } = getToday()

    return (
        <div className="calendar">
            <div className="calendar-grid">
                <div className="date-cell">{year} Y</div>
                <div className="date-cell">{month} M</div>
                <div className="date-cell today">{day} D</div>
            </div>
        </div>
    )
}

export default Calender