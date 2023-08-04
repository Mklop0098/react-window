import { VariableSizeList } from "react-window";
import './App.css';
import { useEffect, useRef, useState } from "react";

type DataType = {
  index: number,
  content: string
  title: string
}

type PostData = {
  index: number,
  height: number
}

function App() {
 
  const listRef = useRef<any>()
  const postsData = useRef<PostData[]>([])
  
  const innerRef = useRef<any>()

  const [data, setData] = useState<DataType[]>([])

  const posts: DataType[] = [
    {
      title: 'this is title',
      index: 0,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 1,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 2,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 3,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text  this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 4,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 5,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 6,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 7,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 8,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 9,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 10,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 11,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 12,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 13,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 14,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 15,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 16,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 17,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 18,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 19,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 20,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 21,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 22,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 23,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
    {
      title: 'this is title',
      index: 24,
      content: 'this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text this is a very very long text',
    }, 
  ]

  useEffect(() => {
    setData(posts)
  }, [])

  const postRow = ({ data, index, style }: any) => {
    return (
      <div style={style}>
        <Post 
          post={data[index]} 
          heightChanged={height => heightChangedHandle(height, index)}
          onRemove={() => handleRemove(index)} 
          className={index % 2 === 0 ? 'odd': 'even'}
        />
      </div>);
  }

  const handleRemove = (index: number) => {
    console.log(index)
    postsData.current = postsData.current.filter(i => i.index !== index)
    setData(data.filter(i => i.index !== index))
    listRef.current.resetAfterIndex(0);
  }
  useEffect(() => {
    if (listRef.current) {
      console.log('a')
      listRef.current.resetAfterIndex(0, true);
    }
  }, [data.length]);

  const heightChangedHandle = (height: number, index: number) => {
    if (!postsData.current.find(i => i.index === index)) {
      postsData.current[index] = {index, height}
    }
    else if (postsData.current.find(i => i.index === index)?.height !== height) {
      const t = postsData.current.filter(i => i.index !== index) 
      t.push({index, height})
      postsData.current = t
    }
    // @ts-ignore
    console.log('aaa', innerRef.current.style.minHeight = '3500px')

    listRef.current.resetAfterIndex(0);
  }

  const getItemSize = (index: number): number => {
    return postsData.current.find(i => i.index === index)?.height || 200;
  }

  console.log(postsData)

  const divRef = useRef<any>();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      // Handle resize event here
      console.log('Div element resized', entries[0].contentRect.height);
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const [a, setA] = useState<boolean>(false)

  useEffect(() => {
    delay(3000).then(() => setA(true))
  }, [])

  return (
    <div className="App">
      <p>react-window</p>





      <div
        onResize={() => console.log('a')}
        ref={divRef}
        style={{display: 'flex', flexDirection: 'column', width: '300px', border: '1px solid black'}}
      >
        <span>hello</span>
          {        
            a && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveziXonPqtIcFuXPCQfZzkHBoCwbPRswaHg&usqp=CAU" alt="pic"/>
          }      
      </div>










      {/* <button onClick={() => posts.push({index: postsData.current.length, content: 'this is a very very long text this is a very very long text this is a very very long text ', title: 'this is title'})}>click me</button> */}
      {/* <VariableSizeList
        ref={listRef}
        innerRef={innerRef}
        itemData={data}
        itemCount={data.length}
        itemSize={getItemSize}
        height={500}
        width={399}
      >
        {postRow}
      </VariableSizeList> */}

      
    </div>
  );
}

export default App;

type PostType = {
  post: DataType,
  heightChanged: (height: number) => void
  className: string
  onRemove: () => void
}

const Post: React.FC<PostType> = (props) => {

  const {post, heightChanged, className, onRemove} = props
  const ref = useRef<any>()

  const [opened, setOpened] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log('POST GENERATED ----------')
    // @ts-ignore
    const heightL = ref.current.offsetHeight;
    setHeight(heightL);
    heightChanged(heightL);
  }, [opened]);

  const toggle = () => {
    setOpened(!opened);
    heightChanged(height);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <span onClick={toggle}>{post.title}</span>
      <button onClick={onRemove}>remove</button>
      {
        opened && <span>{post.content}</span>
      }
    </div>
  )
}