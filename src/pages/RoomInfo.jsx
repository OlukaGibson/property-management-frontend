import { useParams } from "react-router-dom";
import { ROOM_INFO } from "../constants/ROOM_INFO";

const RoomInfo = () => {
    const { roomId } = useParams(); // Getting roomId from URL params
    const room = ROOM_INFO.find(room => room.roomId === parseInt(roomId)); // Finding the room by roomId

    // If room is not found, display a message
    if (!room) {
        return <div>Room not found</div>;
    }

    return (
        <div className="room-info">
            <h1>{room.camera.location} Room</h1>
            <p>Camera Type: {room.camera.type}</p>
            <p>Camera Status: {room.camera.status}</p>
            <p>Last Maintenance: {room.camera.lastMaintenance}</p>

            <h2>Lights</h2>
            {room.lights.map(light => (
                <div key={light.bulbId}>
                    <p>Light Type: {light.type}</p>
                    <p>Status: {light.status}</p>
                    <p>Brightness: {light.brightness}</p>
                </div>
            ))}
        </div>
    );
};

export default RoomInfo;
