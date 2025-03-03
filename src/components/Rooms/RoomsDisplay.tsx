import { useNavigate } from "react-router-dom";
import { ROOM_DETAILS } from "../../constants/ROOM_DETAILS";

const RoomsDisplay = () => {
    const navigate = useNavigate();

    const handleTileClick = (roomId) => {
        navigate(`/rooms/${roomId}`); // Navigate with roomId
    };

    const handleRegisterRoom = () => {
        alert("Register Room button clicked!");
    };

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-8 lg:px-16 relative">
            {/* Register Room button placed at the top right corner with some space from the top */}
            <button
                onClick={handleRegisterRoom}
                className="absolute top-25 right-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                Register Room
            </button>

            <h1 className="text-3xl font-bold text-black text-center mb-8">Available Rooms</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ROOM_DETAILS.length > 0 ? (
                    ROOM_DETAILS.map((room) => (
                        <div
                            key={room.id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleTileClick(room.id)}>
                            <img
                                className="w-full h-56 object-cover"
                                src={room.image}
                                alt={room.roomName}
                            />
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