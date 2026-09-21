import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { photosLinks, gallery } from "#constants/index.js";
import useWindowStore from "#store/window.js";

const Photos = () => {

    const { openWindow } = useWindowStore();

    const handleOpenImage = (imgUrl, index) => {
        openWindow("imgfile", {
            name: `Gallery Image ${index}`,
            imageUrl: imgUrl
        });
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className="bg-white flex h-full">

                <div className="sidebar">
                    <div>
                        <h3>Photos</h3>
                        <ul>
                            {photosLinks.map((item) => (
                                <li key={item.id} className="cursor-default">
                                    <img src={item.icon} className="w-4" alt={item.title} />
                                    <p className="text-sm font-medium truncate">{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex-1 p-5 overflow-y-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {gallery.map((item, index) => (
                            <div
                                key={item.id}
                                className="cursor-pointer hover:opacity-80 transition-opacity rounded overflow-hidden shadow-sm"
                                onClick={() => handleOpenImage(item.img, index + 1)}
                            >
                                <img
                                    src={item.img}
                                    alt={`Gallery thumbnail ${item.id}`}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;