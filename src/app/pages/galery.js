import Image from "next/image";

const photo = [
    '/13-galeri.jpeg',
    '/14-galeri.jpeg',
    '/15-galeri.jpeg',
    '/16-galeri.jpeg',
    '/17-galeri.jpeg',
    '/18-galeri.jpeg',
    '/19-galeri.jpeg',
    '/20-galeri.jpeg',
    '/21-galeri.jpeg',
    '/22-galeri.jpeg',
    '/23-galeri.jpeg',
    '/24-galeri.jpeg',
]
const classForGalery = (i) => {
    const mod = i % 10
    switch (mod) {
        case 1:
            return "col-span-7 pt-2"
        case 2:
            return "col-span-5 pt-2"
        case 3:
            return "col-span-4 pt-2"
        case 4:
            return "col-span-4 pt-2"
        case 5:
            return "col-span-4 pt-2"
        case 6:
            return "col-span-5 pt-2"
        case 7:
            return "col-span-7 pt-2"
        case 8:
            return "col-span-4 pt-2"
        case 9:
            return "col-span-4 pt-2"
        case 0:
            return "col-span-4 pt-2"
        default:
            break;
    }
}

function Gallery() {
    return (
        <div className="grid grid-cols-12 gap-4 gird pt-9">
            {
                photo.map((e, i) => {
                    return (
                        <div className={classForGalery(i+1)}>
                            <div className=" relative h-48 lg:h-[70vh]">
                                <Image
                                    src={e}
                                    fill
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: '50% 50%'
                                    }}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Gallery