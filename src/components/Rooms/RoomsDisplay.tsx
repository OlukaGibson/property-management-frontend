import { useNavigate } from "react-router-dom";
import { ROOM_DETAILS } from "../../constants/ROOM_DETAILS";

const RoomsDisplay = () => {
    const navigate = useNavigate();

    const handleTileClick = (room) => {
        navigate(`/rooms/${room.id}`, { state: { room } });
    };

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-8 lg:px-16">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Available Rooms</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ROOM_DETAILS.length > 0 ? (
                    ROOM_DETAILS.map((room) => (
                        <div
                            key={room.id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleTileClick(room)}>
                            <img
                                className="w-full h-56 object-cover"
                                src={room.image}
                                alt={room.roomName}/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{room.roomName}</h2>
                                <p className="text-gray-600 mt-1">{room.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-gray-700 text-center col-span-full">No rooms available.</p>
                )}
            </div>
        </div>
    );
};

export default RoomsDisplay;