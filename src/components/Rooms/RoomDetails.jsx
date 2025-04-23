import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

const RoomDetails = () => {
    const { roomId } = useParams(); // Getting roomId from URL params
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await axios.get(`${config.baseURL}/room/get_room/${roomId}`);
                setRoom(response.data);
            } catch (error) {
                console.error("Error fetching room info:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoomDetails();
    }, [roomId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // If room is not found, display a message
    if (!room) {
        return <div>Room not found</div>;
    }

    // Prepare data for the chart
    const chartData = {
        labels: room.devices[0].readings.map(reading => reading.timestamp),
        datasets: room.devices.map(device => ({
            label: device.device_type,
            data: device.readings.map(reading => reading.fields.field2),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
        }))
    };

    // Filter users_access to only include the latest entry for each unique timestamp
    const filteredUsersAccess = room.users_access.reduce((acc, user) => {
        const existingUser = acc.find(u => u.time_accessed === user.time_accessed);
        if (!existingUser) {
            acc.push(user);
        }
        return acc;
    }, []);

    return (
        <div className="room-info p-4 md:px-40 md:py-8 bg-gray-200"> {/* Changed background to gray-200 */}
            {/* <br />
            <br /> */}
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2 flex justify-between items-center bg-white p-4 shadow rounded">
                    <h1><p className="text-xl font-bold">Room: </p>{room.room_name}</h1>
                    <p><p className="text-xl font-bold">Room Number: </p>{room.room_number}</p>
                </div>
                <div className="col-span-1 bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Devices</h2>
                    {room.devices.map(device => (
                        <div key={device.deviceID} className="mb-4">
                            <h3 className="text-md font-semibold">Device Type: {device.device_type}</h3>
                            <div>
                                {Object.entries(device.fields).map(([fieldKey, fieldValue]) => (
                                    <p key={fieldKey}>{fieldValue}: {device.readings[device.readings.length - 1].fields[fieldKey]}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-1 bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Current</h2>
                    <div className="h-96 w-full"> 
                        <Line data={chartData} />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Users Access</h2>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-r">Username</th>
                                <th className="py-2 px-4 border-b border-r">Email</th>
                                <th className="py-2 px-4 border-b">Time Accessed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsersAccess.map((user, index) => (
                                <tr key={user.userID} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="py-2 px-4 border-b border-r">{user.username}</td>
                                    <td className="py-2 px-4 border-b border-r">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.time_accessed}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
