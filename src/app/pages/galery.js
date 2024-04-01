import Image from "next/image";

const photo = [
    '/13-galeri.webp',
    '/14-galeri.webp',
    '/15-galeri.webp',
    '/16-galeri.webp',
    '/17-galeri.webp',
    '/18-galeri.webp',
    '/19-galeri.webp',
    '/20-galeri.webp',
    '/21-galeri.webp',
    '/22-galeri.webp',
    '/23-galeri.webp',
    '/24-galeri.webp',
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
                        <div key={e} className={classForGalery(i+1)}>
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