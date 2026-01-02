const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <img
            src={`/images/properties/${image}` || '/images/properties/no-image.jpg'}
            alt=''
            className='object-cover h-[400px] w-full'
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
