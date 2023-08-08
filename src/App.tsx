import { VariableSizeList } from "react-window";
import './App.css';
import { useEffect, useRef, useState } from "react";
import { SmartTree, TreeViewProps } from "./components/Tree/Tree";

function App() {

  const treeProps: TreeViewProps = {
    children: [
      {
        name: 'Folder 1',
        type: 'folder',
        children: [
          { name: 'Folder 1-1', type: 'folder', children: [{ name: 'File 1-1-1', type: 'file' }] },
          { name: 'File 1-2', type: 'file' },
        ],
      },
      {
        name: 'Folder 2',
        type: 'folder',
        children: [
          { name: 'Subfolder 2-1', type: 'folder', children: [{ name: 'File 2-1-1', type: 'file' }] },
          { name: 'File 2-2', type: 'file' },
        ],
      },
      { name: 'File 3', type: 'file' },
    ]
  };

  return (
    <div className="App">

      <SmartTree {...treeProps}/>
      
    </div>
  );
}

export default App;
