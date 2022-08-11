import { useState, useEffect } from 'react';

const useDateConversion = (rawDate) => {
    const [convertedDate, setConvertedDate] = useState("");

    function dateConverter(rawDate) {
        if (rawDate.rawDate !== undefined && rawDate.rawDate !== null) {
            //console.log(rawDate.rawDate)
            const months = ["", "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const arrayDate = [rawDate.rawDate];
            let monthRaw = arrayDate[0].slice(arrayDate[0].length - 5, arrayDate[0].length - 3);
            let monthNum = parseInt(monthRaw);
            let releaseMonth = months[monthNum];
            let dateConverted = arrayDate[0].slice(arrayDate[0].length - 2, arrayDate[0].length) + " " + releaseMonth + " " + arrayDate[0].slice(0, 4);
            setConvertedDate(dateConverted);
        } else {
            setConvertedDate("Unavailable");
        }
    };

    useEffect(() => {
        dateConverter(rawDate);
    }, [rawDate])
    return ({ convertedDate })
}

export default useDateConversion