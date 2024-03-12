import Image from "next/image";

function Gallery() {
    return (
        <div className="grid grid-cols-12 gap-4 gird pt-9">
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-5  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-7  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-4  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-7  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
            <div className=" col-span-5  pt-2">
                <div className=" relative h-48">
                    <Image
                        src="/KJP-9922_websize-1-1250x1000.jpg"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: '30% 100%'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery