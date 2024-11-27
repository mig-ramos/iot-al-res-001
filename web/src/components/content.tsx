interface ContentProps {
    children?: any;
  }
  
  export default function Content(props: ContentProps) {
    return (
      <div
        className={`
             flex flex-col
          `}
      >
        <div className={`w-11/12 mx-auto`}>{props.children}</div>
      </div>
    );
  }