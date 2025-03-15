

const Progress = ({ status }) => {

    let progress = 0;
    let color = 'bg-gray-300';
    let translate = 'شروع نشده';


    switch (status) {
        case "notStarted":
            progress = 10;
            color = 'bg-yellow-300';
            translate = 'شروع نشده';
            break;

        case "InProgress":
            progress = 50;
            color = 'bg-yellow-300';
            translate = 'درحال انجام';
            break;

        case "deliverd":
            progress = 75;
            color = 'bg-yellow-300';
            translate = 'تحویل شده';
            break;

        case "confirmed":
            progress = 100;
            color = 'bg-green-300';
            translate = 'تایید شده';
            break;

        default:
            break;
    }

    return (
        <>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div className={`h-4 rounded-full ${color}`} style={{width: `${progress}%`}}></div>
            </div>

            <div className="flex justify-center text-center">
                {translate}
            </div>
        </>
    )

}

export default Progress;