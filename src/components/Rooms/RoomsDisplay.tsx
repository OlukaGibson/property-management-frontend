import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Sidebar from "../Sidebar";
import Break from "../Break";
import { ROOM_DETAILS } from "../../constants/ROOM_DETAILS";
import { useNavigate } from "react-router-dom";

const tileBorderStyle = {
    border: "1px solid rgba(255, 255, 255, 0.8)",
    padding: "5px",
    borderRadius: "15px",
    overflow: "hidden",
};

const RoomsDisplay = () => {
    const [filters, setFilters] = useState({
        type: [],
        priceRange: [],
        occupancy: [],
        amenities: [],
    });

    const [masonryGridStyle, setMasonryGridStyle] = useState(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 400) {
            return { display: "flex", marginLeft: "-50px", width: "auto" };
        } else if (screenWidth <= 940) {
            return { display: "flex", marginLeft: "-70px", width: "auto" };
        } else {
            return { display: "flex", marginLeft: "-200px", width: "auto" };
        }
    });

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 400) {
                setMasonryGridStyle({ display: "flex", marginLeft: "-50px", width: "auto" });
            } else if (screenWidth <= 940) {
                setMasonryGridStyle({ display: "flex", marginLeft: "-70px", width: "auto" });
            } else {
                setMasonryGridStyle({ display: "flex", marginLeft: "-200px", width: "auto" });
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigate = useNavigate();

    const handleFilterChange = (category, selectedOptions) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [category]: selectedOptions,
        }));
    };

    const filterRooms = () => {
        return ROOM_DETAILS.filter((room) => {
            return Object.keys(filters).every((category) => {
                if (filters[category].length === 0) return true;

                const roomValue = Array.isArray(room[category]) ? room[category].map(String) : [room[category]];

                return filters[category].some((filter) => roomValue.includes(filter));
            });
        });
    };

    const filteredRooms = filterRooms();

    const breakpointColumnsObj = {
        default: 4,
        1000: 3,
        700: 2,
        500: 1,
    };

    const handleTileClick = (room) => {
        navigate(`/rooms/${room.id}`, { state: { room } });
    };

    return (
        <div className="relative bg-cover bg-center bg-no-repeat mt-20">
            <Break />

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/4 lg:block">
                        <Sidebar onFilterChange={handleFilterChange} />
                    </div>

                    <div className="w-full lg:w-3/4">
                        <div className="container mb-20 flex flex-col items-center py-6 mx-auto px-4 sm:px-6 lg:px-10">
                            <div className="relative z-10 w-full">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                    style={masonryGridStyle}
                                >
                                    {filteredRooms.length > 0 ? (
                                        filteredRooms.map((room) => (
                                            <div key={room.id} className="mb-4" style={tileBorderStyle} onClick={() => handleTileClick(room)}>
                                                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                                    <div style={{ aspectRatio: "4 / 3" }}>
                                                        <img className="w-full h-full object-cover" src={room.image} alt={room.roomName} />
                                                    </div>
                                                    <div className="p-4">
                                                        <h2 className="text-base sm:text-lg md:text-xl font-bold">{room.roomName}</h2>
                                                        <p className="mt-2 text-gray-600">{room.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-white font-bold text-xl mb-4">
                                            <p>No rooms found matching the selected filters.</p>
                                        </div>
                                    )}
                                </Masonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RoomsDisplay;
