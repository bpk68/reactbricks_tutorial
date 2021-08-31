import { types, Text, RichText, Image } from 'react-bricks';


interface ThumbnailProps {
    hasShadow: boolean,
    bgColor: types.IColor,
  }

const Thumbnail: types.Brick<ThumbnailProps> = ({ hasShadow, bgColor, ...rest }) => (
    <div
    {...rest}
    className={`my-6 p-6 text-center border rounded-lg ${
      hasShadow ? 'shadow-xl' : ''
    } ${bgColor.className}`}
  >

    <Image
      propName="image"
      alt="Fallback alt tag"
      maxWidth={200}
      imageClassName="mb-6"   
    />

    <Text
      propName="title"
      renderBlock={({ children }) => (
        <h1 className="text-2xl font-bold">{children}</h1>
      )}
      placeholder="Type a title..."
    />
    
    <RichText
      propName="description"
      renderBlock={({ children }) => (
        <p className="text-lg text-gray-500">{children}</p>
      )}
      placeholder="Type a description"
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  </div>
);

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    getDefaultProps: () => ({
        title: "Default title",
        description: "Hey there good looking, what's cooking?",
        image: {
            src: "https://images.reactbricks.com/original/9f4cd299-21a7-41b8-a2f3-f371904d33e3.png",
            placeholderSrc: "https://images.reactbricks.com/placeholder/9f4cd299-21a7-41b8-a2f3-f371904d33e3.png",
            srcSet: "https://images.reactbricks.com/src_set/9f4cd299-21a7-41b8-a2f3-f371904d33e3-400.png 400w,https://images.reactbricks.com/src_set/9f4cd299-21a7-41b8-a2f3-f371904d33e3-300.png 300w,https://images.reactbricks.com/src_set/9f4cd299-21a7-41b8-a2f3-f371904d33e3-200.png 200w,https://images.reactbricks.com/src_set/9f4cd299-21a7-41b8-a2f3-f371904d33e3-100.png 100w,https://images.reactbricks.com/src_set/9f4cd299-21a7-41b8-a2f3-f371904d33e3-50.png 50w"
        },
        hasShadow: true,
        bgColor: { color: '#ffffff', className: 'bg-white' }
    }),
    sideEditProps: [
        {
            name: 'hasShadow',
            label: 'Shadow',
            type: types.SideEditPropType.Boolean
        },
        {
            name: 'bgColor',
            label: 'Background',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Color,
              options: [
                {
                  label: 'White',
                  value: { color: '#ffffff', className: 'bg-white' },
                },
                {
                  label: 'Light blue',
                  value: { color: '#eff6ff', className: 'bg-blue-50' },
                },
              ],
            },
          },
    ],
};

export default Thumbnail;