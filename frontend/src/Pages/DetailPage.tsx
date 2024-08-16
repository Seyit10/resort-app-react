import React, { useState, useEffect } from 'react';
import { useGetResort } from "@/api/ResortApi";
import ResortInfo from "@/components/ResortInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Galleria } from "primereact/galleria";
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

const DetailPage = () => {
  const { resortId } = useParams();
  const { resort, isLoading } = useGetResort(resortId);

  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<Image[]>([
    {
      itemImageSrc: "",
      thumbnailImageSrc: "",
      alt: "Photo 1",
      title: "Photo 1",
    },
    {
      itemImageSrc: "",
      thumbnailImageSrc: "",
      alt: "Photo 2",
      title: "Photo 2",
    },
    {
      itemImageSrc: "",
      thumbnailImageSrc: "",
      alt: "Photo 3",
      title: "Photo 3",
    },
  ]);

  useEffect(() => {
    if (resort) {
      const resortImages: Image[] = [
        { itemImageSrc: resort.photo1, thumbnailImageSrc: resort.photo1, alt: 'Photo 1', title: 'Photo 1' },
        { itemImageSrc: resort.photo2, thumbnailImageSrc: resort.photo2, alt: 'Photo 2', title: 'Photo 2' },
        { itemImageSrc: resort.photo3, thumbnailImageSrc: resort.photo3, alt: 'Photo 3', title: 'Photo 3' }
      ];
      setImages(resortImages);
    }
  }, [resort]);

  if (isLoading || !resort) {
    return "Yükleniyor...";
  }

  const next = () => {
    setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1);
  }

  const prev = () => {
    setActiveIndex((prevState) => (prevState === 0 ? images.length - 1 : prevState - 1));
  };

  const itemTemplate = (item: Image) => (
    <div className="w-full h-64 relative">
      <img src={item.itemImageSrc} alt={item.alt} className="w-full h-full object-cover rounded-lg" />
    </div>
  );

  const thumbnailTemplate = (item: Image) => (
    <img src={item.thumbnailImageSrc} alt={item.alt} className="w-16 h-16 object-cover rounded-lg" />
  );

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={resort.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <ResortInfo resort={resort} />
        </div>
      </div>
      <div className="card w-full">
        <div className="mb-3 flex justify-center">
          <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
          <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
        </div>

        <div className="w-full flex justify-center">
          <Galleria
            
            value={images}
            activeIndex={activeIndex}
            onItemChange={(e) => setActiveIndex(e.index)}
            responsiveOptions={[
              { breakpoint: '1024px', numVisible: 3 },
              { breakpoint: '600px', numVisible: 2 },
              { breakpoint: '480px', numVisible: 1 },
            ]}
            numVisible={5}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            style={{ width: '100%' }}
            showThumbnails
            showIndicators
            showItemNavigators
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
