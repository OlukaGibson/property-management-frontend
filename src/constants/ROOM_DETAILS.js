import Room1 from "../assets/room 1.jpeg";
import Room2 from "../assets/room 2.jpeg";
import Room3 from "../assets/room 3.jpeg";
import Room4 from "../assets/room 4.jpeg";
import Room5 from "../assets/room 5.jpeg";
import Room6 from "../assets/room 6.jpeg";
import Room7 from "../assets/room 7.jpeg";
import Room8 from "../assets/room 8.jpeg";
import Room9 from "../assets/room 9.jpeg";
import Room10 from "../assets/room 10.jpeg";

export const ROOM_IMAGES = [Room1, Room2, Room3, Room4, Room5, Room6, Room7, Room8, Room9, Room10];

export const ROOM_DETAILS = [
    {
        "id": 1,
        "room_name": "room1",
        "room_number": "12334"
    },
    {
        "id": 2,
        "room_name": "room2",
        "room_number": "12332"
    }
];

export const ROOM_INFO = {
    "devices": [
        {
            "deviceID": 2,
            "device_type": "Bulb",
            "fields": {
                "field1": "On Off Status",
                "field2": "Current Status"
            },
            "readings": [
                {
                    "fields": {
                        "field1": "1",
                        "field2": "4.5"
                    },
                    "readingID": 1,
                    "timestamp": "Sat, 01 Mar 2025 14:01:43 GMT"
                },
                {
                    "fields": {
                        "field1": "0",
                        "field2": "12.4"
                    },
                    "readingID": 2,
                    "timestamp": "Sat, 01 Mar 2025 14:31:09 GMT"
                },
                {
                    "fields": {
                        "field1": "1",
                        "field2": "33.2"
                    },
                    "readingID": 4,
                    "timestamp": "Sat, 01 Mar 2025 14:41:04 GMT"
                }
            ]
        }
    ],
    "roomId": 1,
    "room_name": "room1",
    "room_number": "12334",
    "users_access": [
        {
            "email": "oluka@gmail.com",
            "time_accessed": "Sat, 01 Mar 2025 13:52:19 GMT",
            "userID": 2,
            "username": "oluka"
        },
        {
            "email": "oluka@gmail.com",
            "time_accessed": "Sat, 01 Mar 2025 13:52:19 GMT",
            "userID": 2,
            "username": "oluka"
        },
        {
            "email": "admin@gmail.com",
            "time_accessed": "Sat, 01 Mar 2025 14:51:07 GMT",
            "userID": 1,
            "username": "admin"
        },
        {
            "email": "oluka@gmail.com",
            "time_accessed": "Fri, 14 Mar 2025 04:08:45 GMT",
            "userID": 2,
            "username": "oluka"
        },
        {
            "email": "oluka@gmail.com",
            "time_accessed": "Fri, 14 Mar 2025 04:08:45 GMT",
            "userID": 2,
            "username": "oluka"
        }
    ]
}